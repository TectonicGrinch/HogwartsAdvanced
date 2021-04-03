const Discord = require('discord.js');
const { pagify } = require('../../Util/utils');

module.exports.run = async (bot, message, args) => {

    //Code Start
    if(args[0]?.toLowerCase() == 'show'){
        args.shift()
        let items = require('../../json/items/items.json')
        let itemName = args.join(' ').toLowerCase()
        let userDB = bot.db.get(message.author.id)
        let item = items[itemName]
    
        if(!item || !userDB.inv.some(i => i.name == itemName))
            return message.channel.send(bot.embed('No item exists with that name.'))

        return message.channel.send(bot.embed(itemName).attachFiles([`./Storage/${itemName}.png`]).setImage(`attachment://${itemName}.png`))
    }
    let page = isNaN(args[0]) ? 1 : Number(args[0]) 
    let user = message.mentions.users.first() || message.author
 
    let userDB = bot.db.get(user.id)
    let inv = pagify(userDB.inv, 10, page)

    message.channel.send(bot.embed(inv.map(i => `${i.name} - ${i.amount}x`).join('\n') || 'Empty').setAuthor(`${user.username}'s inventory`, user.avatarURL({dynamic: true})))
	//Code End

}

module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    usage: "<page> <@user> or <show> [item name]", //if args is set to false you can remove this otherwise describe how to use the command
    command: "inventory",
    aliases: ["inv"],
    cooldown: 5, //Cooldown in seconds
	args: false //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}