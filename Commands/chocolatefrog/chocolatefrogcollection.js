const Discord = require('discord.js');
const { pagify } = require('../../Util/utils');

module.exports.run = async (bot, message, args) => {

    //Code Start
    if(args[0]?.toLowerCase() == 'display'){
        args.shift()
        cards = require('../../json/chocolatefrogcards/chocolatecards.json')
        let cardName = args.join(' ').toLowerCase()
        let userDB = bot.db.get(message.author.id)
        let card = cards.frogCards[cardName]
    
        if(!card || !userDB.frogCards.some(c => c.name == cardName))
            return message.channel.send(bot.embed('No item exists with that name.'))

        return message.channel.send(bot.embed(cardName).attachFiles([`./Storage/${cardName}.png`]).setImage(`attachment://${cardName}.png`))
    }
    let page = isNaN(args[0]) ? 1 : Number(args[0]) 
    let user = message.mentions.users.first() || message.author
 
    let userDB = bot.db.get(user.id)
    let inv = pagify(userDB.frogCards, 10, page)

    message.channel.send(bot.embed(inv.map(c => `${c.name} - ${c.amount}x`).join('\n') || 'Empty').setAuthor(`${user.username}'s Card Collection`, user.avatarURL({dynamic: true})))
	//Code End

}

module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    usage: "<page> <@user> or <show> [item name]", //if args is set to false you can remove this otherwise describe how to use the command
    command: "cardcollection",
    aliases: ["cfc"],
    cooldown: 5, //Cooldown in seconds
	args: false //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}