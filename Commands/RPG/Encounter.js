const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	let userDB = bot.db.get(message.author.id);
	let locationUser = userDB.location;
	let itemIndex = require("../../json/items/items.json");

	try {
		let world = require(`../../json/world.json`);
		let locationEncounters = world[`${locationUser}`].encounters;
		let encounter = locationEncounters[Object.keys(locationEncounters)[Math.floor(Math.random() * Object.keys(locationEncounters).length)]];
		const encounterEmbed = new Discord.MessageEmbed()
			.setTitle(encounter.title)
			.setDescription(encounter.action)
			.setColor("RANDOM")
			.setTimestamp();

		let msg = await message.channel.send(encounterEmbed);

		msg.react(encounter.option1.emoji);
		msg.react(encounter.option2.emoji);
		msg.react(encounter.option3.emoji);

		const filter = (r, u) =>
			u.id == message.author.id &&
			(r.emoji.name == encounter.option1.emoji ||
				r.emoji.name == encounter.option2.emoji ||
				r.emoji.name == encounter.option3.emoji);

		msg.awaitReactions(filter, { time: 60000, max: 1 }).then((collected) => {
			let emoji = collected.first().emoji.name;
			let opt = Object.values(encounter).find((o) => o.emoji == emoji);
			let isSuccessful = Math.random() <= opt.chance;

			if (!isSuccessful) return message.channel.send(bot.embed(opt.failMessage).setFooter(`No Rewards`));
			switch (opt.reward.type) {
				case "money":
					bot.db.add(`${message.author.id}.balance`, opt.reward.value);
					break;

				case "item":
					let item = itemIndex.allitems[opt.reward.value];
					if (item) {
						let idx = userDB.inv.findIndex((i) => i.name == opt.reward.value);
						if (idx == -1) {
							userDB.inv.push({ name: opt.reward.value, amount: 1, response: item.response });
						} else {
							userDB.inv[idx].amount++;
						}
						bot.db.set(message.author.id, userDB);
					}
					break;

				case "nothing":
					break;
			}
			switch (opt.reward.type) {
				case "item":
					message.channel.send(
						bot.embed(opt.successMessage).setFooter(`Rewards: ${opt.reward.type} x1 ${opt.reward.value}`)
					);
					break;
				case "money":
					message.channel.send(
						bot.embed(opt.successMessage).setFooter(`Rewards: ${opt.reward.type} $${opt.reward.value}`)
					);
					break;
				case "nothing":
					message.channel.send(bot.embed(opt.successMessage).setFooter(`No Rewards`));
					break;
			}
		});
	} catch (e) {
		message.channel.send(bot.embed(`there seems to be nothing to do in **${locationUser}**.`));
		console.log(`encounter file doesn't exist.`);
	}
};

module.exports.config = {
	cmdPerms: ["EMBED_LINKS"],
	command: "encounter",
	cooldown: 5 * 60, //Cooldown in seconds
	args: false, //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
};
