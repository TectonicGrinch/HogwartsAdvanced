const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    //Code Start


    let userDB = bot.db.get(message.author.id)
    message.channel.send(bot.embed(`**Pet Sheet**
    **Pet**: ${userDB.petType}`));
console.log(`${userDB}`)

}

module.exports.config = {
    usage: "<@user>", //if args is set to false you can remove this otherwise describe how to use the command
    command: "petsheet",
    aliases: ["ps"],
    cooldown: 2, //Cooldown in seconds
	args: false //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}