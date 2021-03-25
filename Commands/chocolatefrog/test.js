const Discord = require('discord.js');
const { pagify } = require('../../Util/utils');

module.exports.run = async (bot, message, args) => {

    //Code Start
   let items = require('../../json/items/items.json');
   let itemName = items.allitems

   let itemText = Math.floor(Math.random() * itemName.length)

    message.channel.send(bot.embed(`${itemText}`))
	//Code End
    console.log(items)

}

module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    usage: "", //if args is set to false you can remove this otherwise describe how to use the command
    command: "test",
    aliases: ["t"],
    cooldown: 5, //Cooldown in seconds
	args: false //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}