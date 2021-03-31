const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	let user = message.author;
	let locObj = bot.db.get(user.id) || {};
	message.channel.send(bot.embed(`**${user.username}**Location: **${locObj.location || "undefined"}**`));
	console.log(`${user} is located at ${locObj.location || "undefined"}`);
};

module.exports.config = {
	cmdPerms: ["EMBED_LINKS"],
	command: "locate",
	cooldown: 5,
	args: false,
};
