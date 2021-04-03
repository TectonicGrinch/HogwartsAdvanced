const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    //Code Start

    let user = message.mentions.users.first();
    if(!user)
        return message.channel.send(bot.embed('No user mentioned'))
    args.shift()
    const itemName = args.join(' ')
    let items = require('../../json/items/items.json')
    let item = items[itemName]
    if(!item)
        return message.channel.send(bot.embed('No item exists with that name.'))

    let userDB = bot.db.get(user.id)
    let idx = userDB.inv.findIndex(i => i.name == itemName)
    if(idx == -1){
        userDB.inv.push({ name: itemName, amount: 1, response: item.response, infinite: item.infinite })
    }else{
        userDB.inv[idx].amount++;
    }
    bot.db.set(user.id, userDB)
    message.channel.send(bot.embed(`You have given 1x ${itemName} to ${user}`))
    
	//Code End

}

module.exports.config = {
    permission: "ADMINISTRATOR",
    cmdPerms: ["EMBED_LINKS"],
    usage: "@user [item name]", //if args is set to false you can remove this otherwise describe how to use the command
    command: "giveitem",
    cooldown: 5, //Cooldown in seconds
	args: true //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}