const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    //Code Start
    if (args[0]?.toLowercase() == 'spell'){
args.shift()

    let user = message.mentions.users.first() || message.author;
    let locObj = bot.db.get(user.id) || {};
 
 
 
         
         message.channel.send(bot.embed(``));
 

    


    
	//Code End
}else{

    message.channel.send(bot.embed(`no args`))

    }
}

module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    usage: "", //if args is set to false you can remove this otherwise describe how to use the command
    command: "wand",
    cooldown: 5, //Cooldown in seconds
	args: true //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}