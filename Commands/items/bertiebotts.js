const Discord = require('discord.js');
const util = require('../../Util/utils');
const goodbean = require('../../json/goodbean.json');
const badbean = require('../../json/badbean.json');
module.exports.run = async (bot, message, args) => {
    
    
    let itemName = "bertiebotts"
    let userDB = bot.db.get(message.author.id);
    let item = bot.config.shop[itemName]
   
    let flip = Math.Floor(Math.random(1, 101));
    let goodbeant = util.dynamicgenerator(goodbean); 
    let badbeant = util.dynamicgenerator(badbean);
   
    if(!item || !userDB.inv.some(i => i.name == itemName)){

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