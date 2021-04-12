const Discord = require('discord.js');
const util = require('../../Util/utils');
const invFuncs = require('../../Util/invFuncs')
const bertiebotts = require('../../json/bertieBeans.json')
module.exports.run = async (bot, message, args) => {
    let itemName = "bertiebotts"
    let item = invFuncs.invHasItem(message.author, itemName)

    let flip = Math.floor(Math.random() * 100) + 1;
    let goodbeant = util.dynamicgenerator(bertiebotts.goodbean); 
    let badbeant = util.dynamicgenerator(bertiebotts.badbean);
   
    if(!item){

        message.channel.send(bot.embed(`you don't have any ${itemName} purchase some from the store to use this command.`))

    }else{
        switch(!flip){
      
        case (flip > 51):

        message.channel.send(bot.embed(`**${message.author}** ate a **${goodbeant}** flavoured bean 👼`).setColor('#1DD500'));
        break;

        case (flip < 50):

        message.channel.send(bot.embed(`**${message.author}** ate a **${badbeant}** flavoured bean 🤮`).setColor('#E50000'));
        break;
    }
    console.log(`${message.author.username} used >bertiebotts ${flip} ${goodbeant} ${badbeant}`);
    }
}

module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    usage: "", //if args is set to false you can remove this otherwise describe how to use the command
    command: "bertiebotts",
    aliases: ["bb"],
    cooldown: 5, //Cooldown in seconds
	args: false //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}