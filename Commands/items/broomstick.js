const Discord = require("discord.js");
const { dynamicgenerator } = require("../../Util/utils");
const trickarray = require(`../../json/broomtricks`);
const { travelTo } = require("../../Logic/Travel");

module.exports.run = async (bot, message, args) => {
	let mention = message.mentions.users.first();
	let command = args[0];

	switch (command) {
		case "travel":
			travelTo(args, bot, message);
      console.log('time to travel')
			break;
		case "race":
			let flip = Math.floor(Math.random(1 * 101));
			if (flip > 51) message.channel.send(bot.embed(`You race ${mention || `a random`} and placed **1st**`));
			else message.channel.send(bot.embed(`You race ${mention || `a random`} and placed **last**`));
			break;
		case "trick":
			let trick = dynamicgenerator(trickarray);
			message.channel.send(`You decide to do a trick on your broom you do a **${trick}**.`);
			break;

		default:
			message.channel.send(bot.embed(`>broomstick travel | race | trick  `));
	}
};

module.exports.config = {
	cmdPerms: ["EMBED_LINKS"],
	usage: "test", //if args is set to false you can remove this otherwise describe how to use the command
	command: "broomstick",
	cooldown: 1 * 60, //Cooldown in seconds
	args: true, //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
};
