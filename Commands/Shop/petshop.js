const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	//Code Start

	let userDB = bot.db.get(message.author.id);

	//  db.get('myBalance') // -> null
	let world = require(`../../json/world.json`);
	let availablePets = findPets(userDB.location, world);
	if (availablePets.length > 0) {
		const petEmbed = new Discord.MessageEmbed()
			.setTitle("The Magical Menagerie")
			.setDescription(
				`***You are welcomed by a shopkeeper***
    Welcome to The Magical Menagerie
    here you will find a pet for all your needs
    what are your needs by the way?
    Each pet is worth $150.
    React to buy:
   ${listPets(availablePets)}`
			)
			.attachFiles([`./resources/locations/magicalmenagerie.png`])
			.setImage(`attachment://magicalmenagerie.png`)
			.setFooter(`Buying a new pet will reset your pet level!`);

		let msg = await message.channel.send(petEmbed);
		for (i in availablePets) {
			pet = availablePets[i];
			msg.react(pet.id);
		}
		const filter = (r, u) =>
			u.id == message.author.id && (r.emoji.name == "🦉" || r.emoji.name == "🐱" || r.emoji.name == "🐸");

    // current bug is if user travels to new area (where no pets available) before buying a pet an error will occur
		msg.awaitReactions(filter, { time: 60000, max: 1 }).then((collected) => {
			let emoji = collected.first().emoji.name;

			for (i in availablePets) {
				pet = availablePets[i];
				if (emoji == pet.id) {
					bot.db.push("userDB.pet", {
						pet: pet.name,
						petName: pet.givenName,
						petLevel: 0,
						petDamage: pet.damage,
						petHealth: pet.health,
					});
					message.channel.send(bot.embed(`You have brought a ${pet.name}!`));
				}
			}
		});
	} else {
		console.log("no pets available here");
		message.channel.send(bot.embed(`Sorry there is no pets available here`));
	}
};
// grabs pets available based on location
// TODO: add pets available everywhere and merge with locational ones here
function findPets(location, world) {
	let ret =[];
	for (pet in world[`${location}`].petShop) {
		ret.push(world[`${location}`].petShop[`${pet}`]);
	}
	return ret;
}
// turns list of pets into formatted string
function listPets(allPets) {
	let ret = '';
	for (i in allPets) {
		let pet = allPets[i];
		ret += `\n**${pet.name}** ${pet.id} \nHealth: ${pet.health}\nDamage: ${pet.damage}`;
	}
	return ret;
}
module.exports.config = {
	cmdPerms: ["EMBED_LINKS"],
	usage: "", //if args is set to false you can remove this otherwise describe how to use the command
	command: "petshop",
	aliases: ["pshop"],
	cooldown: 5, //Cooldown in seconds
	args: false, //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
};
