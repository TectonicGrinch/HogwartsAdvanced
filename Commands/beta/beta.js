const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let user = message.author.username
    let itemName = "betakey";
    let opt = args.shift().toLowerCase()

    switch(opt){
    case 'info':
         message.channel.send(bot.embed(``))
        break;
    case 'special':

        break;
    case 'flex':
        message.channel.send(bot.embed(`Thats right ${user} has a beta key they were here before you knew the bot existed arent they cool!`).attachFiles([`./resources/gifs/flex.gif`]).setImage(`attachment://flex.gif`))
        break;
    default:
        message.channel.send(bot.embed(`>betakey info | special | flex`))
        break;
    



    }

}

module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    usage: "Beta users only.", //if args is set to false you can remove this otherwise describe how to use the command
    command: "betauser",
    aliases: ["bu"],
    cooldown: 5, //Cooldown in seconds
	args: true //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}