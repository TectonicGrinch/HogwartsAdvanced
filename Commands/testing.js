const Discord = require('discord.js');
const messageFuncs = require('../Logic/Message');
module.exports.run = async (bot, message, args) => {


let emoticons = ['1️⃣', '2️⃣', '🍆']
const messageEmbed = new Discord.MessageEmbed()
.setTitle('React to me bby')
.setDescription(`Daddy!`);

let msg = await message.channel.send(messageEmbed)

messageFuncs.reactionReactMessage(emoticons, msg)



 


    

}

module.exports.config = {

    cmdPerms: ["EMBED_LINKS"],
    usage: "", //if args is set to false you can remove this otherwise describe how to use the command
    command: "t",
    cooldown: 5, //Cooldown in seconds
	args: false //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}