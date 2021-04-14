//TODO
const Discord = require("discord.js");
const userFuncs = require('../../Logic/User');
module.exports.run = async (bot, message, args) => {

    let mentionUser = args[0]
    let userDB = bot.db.get(message.author.id);

    let userLocationCheck = userFuncs.canInteract(mentionUser, message.author, message)
    if(!mentionUser){
        return message.channel.send(`You need to mention someone to interact with.`)
    }
    if(userLocationCheck){
        let msg = new Discord.MessageEmbed()
            .setTitle('**Interaction Menu:**')
            .setDescription(`Choose your options below:
            Duel[uncomplete]
            Trade[uncomplete]
            Gift[uncomplete]`)
        

    }



}
module.exports.config = {
	cmdPerms: ["EMBED_LINKS"],
	usage: "", //if args is set to false you can remove this otherwise describe how to use the command
	command: "interact",
	cooldown: 5, //Cooldown in seconds
	args: false, //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
};
