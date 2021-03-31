const fs = require("fs");
const Discord = require("discord.js");
const { pagify } = require("../../Util/utils");

module.exports.run = async (bot, message, args) => {
	let userDB = bot.db.get(message.author.id);
	let locationUser = userDB.location;

	try {
		let world = require(`../../json/world.json`);
		let locationShop = world[`${locationUser}`];
		let page = isNaN(args[0]) ? 1 : Number(args.shift());
		let sortiment = Object.entries(locationShop.shop).filter((i) => !i[1].hidden);
		let items = pagify(sortiment, 10, page);

		message.channel.send(
			bot.embed(items.map((i) => `**${i[0]}** - price: **$${i[1].price}** - description: ${i[1].description}`).join("\n")));
		console.log(`Shop Found at ${locationUser}`);
	} catch (e) {
		message.channel.send(bot.embed(`${locationUser} doesn't have a shop.`));
		console.log(`location file doesn't exist.`);
	}
};

module.exports.config = {
	cmdPerms: ["EMBED_LINKS"],
	usage: "<page>", //if args is set to false you can remove this otherwise describe how to use the command
	command: "shop",
	cooldown: 2, //Cooldown in seconds
	args: false, //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
};
