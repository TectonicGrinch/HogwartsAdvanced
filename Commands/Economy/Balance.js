const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    //Code Start
    let user = message.mentions.users.first() || message.author;
    let ecoObj = bot.db.get(user.id) || {};
    message.channel.send(bot.embed(`Balance: **$${ecoObj.balance || 0}**\nJob: **${ecoObj.job?.name || 'none'}**`).setAuthor(`${user.username}'s info`, user.avatarURL({dynamic: true})));
	//Code End

}

module.exports.config = {
    usage: "<@user>", //if args is set to false you can remove this otherwise describe how to use the command
    command: "balance",
    aliases: ["bal", "profile"],
    cooldown: 2, //Cooldown in seconds
	args: false //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}