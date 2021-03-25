const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {


    let user = message.mentions.users.first()
    let argRace = args[1]


    if(!message.author.id == '184191493919997952'){
        message.channel.send(bot.emebd(`**You are not the bot owner...**`))
    }else{
        if(argRace){
            bot.db.set(user.id, { race: argRace })
        message.channel.send(bot.embed(`you have set ${user}'s race to **${argRace}**`))
    }else{
        message.channel.send(bot.embed(`please provide an argument for race`))
    }

    

 }
}

module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    usage: "", //if args is set to false you can remove this otherwise describe how to use the command
    command: "setrace",
    aliases: ["setr"],
    cooldown: 5, //Cooldown in seconds
	args: true //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}