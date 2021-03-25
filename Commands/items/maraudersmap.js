const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    //Code Start
    
    let user = message.mentions.users.first() || message.author;
    let locObj = bot.db.get(user.id)
 
 
 
         
         message.channel.send(bot.embed(`
         **Marauders Map**
         Found User: **${user.username}**
         Location: **${locObj.location || 'hidden'}**`).attachFiles([`./resources/gifs/maraudersmap.gif`]).setImage(`attachment://maraudersmap.gif`));
 




    
	//Code End
}

module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    usage: "", //if args is set to false you can remove this otherwise describe how to use the command
    command: "maraudersmap",
    cooldown: 5, //Cooldown in seconds
	args: true //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}