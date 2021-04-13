const Discord = require("discord.js");
const world = require("../json/world.json");
const {travelTo} = require('../Logic/Travel')

module.exports.run = async (bot, message, args) => {
	let command = args[0];
	let userDB = bot.db.get(message.author.id) || {};
	if (!command)
		message.channel.send(bot.embed(`**${message.author.username}** Location: **${userDB.location || "undefined"}**`));
	  console.log(`${message.author} is located at ${userDB.location || "undefined"}`);
	if (command) {
		switch (command) {
			case "list":
				let ret = "";
				for (i in world) {
					let location = world[i];
					ret += `\n${location.name},`;
				}
				message.channel.send(bot.embed(`${ret}`));
				break;

			case "travel":
        travelTo(args, bot, message)
				break;
		}
	}
};

module.exports.config = {
	cmdPerms: ["EMBED_LINKS"],
	usage: "[place/city]", //if args is set to false you can remove this otherwise describe how to use the command
	command: "location",
	cooldown: 5, //Cooldown in seconds
	args: false, //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
};
