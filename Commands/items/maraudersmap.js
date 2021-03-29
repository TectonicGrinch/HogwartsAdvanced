const Discord = require('discord.js');
const invFuncs = require('../../Util/invFuncs')

module.exports.run = async (bot, message, args) => {
    //Code Start
    let user = message.mentions.users.first() || message.author;
    let itemName = 'maraudersmap';
    let userDB = bot.db.get(message.author.id);
 
    let item = invFuncs.invHasItem(user, itemName)

   

   
    if(!item){

        message.channel.send(bot.embed(`you don't have the ${itemName}.`))

    }else{

    let locObj = bot.db.get(user.id)
 
 
 
         
         message.channel.send(bot.embed(`
         **Marauders Map**
         Found User: **${user.username}**
         Location: **${locObj.location || 'hidden'}**`).attachFiles([`./resources/gifs/maraudersmap.gif`]).setImage(`attachment://maraudersmap.gif`));
 



    }
    
	//Code End
}

module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    usage: "", //if args is set to false you can remove this otherwise describe how to use the command
    command: "maraudersmap",
    cooldown: 5, //Cooldown in seconds
	args: false //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}