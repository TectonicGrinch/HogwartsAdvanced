const Discord = require('discord.js');
const location = "diagon alley"
module.exports.run = async (bot, message, args) => {
    //job restriction
    let userDB = bot.db.get(message.author.id)
    if(!userDB.location.hasOwnProperty || (location && userDB.location != location))
        return message.channel.send(bot.embed(`You can\'t use this command. ${location ? `You need to be at ${location}` : `You don't have a job.`}`))

    //message
    message.channel.send(bot.embed(`test passed`));
    console.log(`${userDB.location}`)
}

module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    usage: "test", //if args is set to false you can remove this otherwise describe how to use the command
    command: "dtest",
    aliases: ["dt"],
    cooldown: 30, //Cooldown in seconds
	args: false //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}
