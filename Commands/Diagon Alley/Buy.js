const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    //Code Start
    let amount = isNaN(args[0]) ? 1 : Number(args.shift())
    let itemName = args.join(' ').toLowerCase()

    let item = bot.config.shop[itemName]
    if(!item || item.hidden)
        return message.channel.send(bot.embed('No item exists with that name.'))

    let userDB = bot.db.get(message.author.id)

    let price = Math.round(Number(item.price * amount))
    if(price > userDB.balance)
        return message.channel.send(bot.embed(`You don\'t have enough $$. Price is ${item.price * amount}`))

    userDB.balance -= price
    let idx = userDB.inv.findIndex(i => i.name == itemName)
    if(idx == -1){
        userDB.inv.push({ name: itemName, amount, response: item.response, infinite: item.infinite })
    }else{
        userDB.inv[idx].amount += amount;
    }
    bot.db.set(message.author.id, userDB)
    message.channel.send(bot.embed(`You have bought ${amount}x ${itemName} for **$${price}**`))
	//Code End

}

module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    usage: "<amount> [item name]", //if args is set to false you can remove this otherwise describe how to use the command
    command: "buy",
    location: "diagon alley",
    cooldown: 5, //Cooldown in seconds
	args: true //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}