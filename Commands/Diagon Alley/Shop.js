const Discord = require('discord.js');
const { pagify } = require('../../Util/utils');

module.exports.run = async (bot, message, args) => {
    let userDB = bot.db.get(message.author.id);
    let location1 = userDB.location
    switch(location1){
    

    case 'diagon alley':
    let page = isNaN(args[0]) ? 1 : Number(args.shift())
    let sortiment = Object.entries(bot.config.shop).filter(i => !i[1].hidden)
    let items = pagify(sortiment, 10, page)
    message.channel.send(bot.embed(items.map(i => `**${i[0]}** - price: **$${i[1].price}** - description: ${i[1].description}`).join('\n')))
    break;
    case 'london':
        message.channel.send(bot.embed(`london shop`));
        break;
    case 'hogsmeade':
        message.channel.send(bot.embed(`hogsmeade shop`));
    break;
    
    default:
        message.channel.send(bot.embed(`This location doesn't have a shop.`));
        break;
}
}

module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    usage: "<page>", //if args is set to false you can remove this otherwise describe how to use the command
    command: "shop",
    cooldown: 2, //Cooldown in seconds
	args: false //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}