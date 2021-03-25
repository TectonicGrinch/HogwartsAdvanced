const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let cards = require("../../json/chocolatefrogcards/chocolatecards.json")
    let itemName = "chocolatefrog"
    let userDB = bot.db.get(message.author.id);
    let allItems = require('../../json/items/items.json')
    let items = allItems.shop[itemName]


    let idx = userDB.inv.findIndex(i => i.name == itemName)
 
    bot.db.set(message.author.id, userDB)

    let CardOne = Math.floor(Math.random() * cards.Rarity1.numb.length)

    let randomOneInThree = Math.random();
   
 
   
    if(!items || !userDB.inv.some(i => i.name == itemName)){

        message.channel.send(bot.embed(`you don't have any ${itemName}'s purchase some from the store to use this command.`))
        


}else{



if (randomOneInThree < 0.5){
    bot.add(cardOne)
message.channel.send(bot.embed(`50%`))
    // 50% chance of being here
}else if (randomOneInThree < 0.7){
    message.channel.send(bot.embed(`20%`))
// 20%

}else{
    
    message.channel.send(bot.embed(`30%`))
   
    // 30% chance of being here






        }
    }
}

module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    usage: "", //if args is set to false you can remove this otherwise describe how to use the command
    command: "cf",
    cooldown: 5, //Cooldown in seconds
	args: false //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}
