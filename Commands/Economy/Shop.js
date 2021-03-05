const Discord = require('discord.js');
const { pagify } = require('../../Util/utils');

module.exports.run = async (bot, message, args) => {

    //Code Start
    let page = isNaN(args[0]) ? 1 : Number(args.shift())
    let sortiment = Object.entries(bot.config.shop).filter(i => !i[1].hidden)
    let items = pagify(sortiment, 10, page)
    message.channel.send(bot.embed(items.map(i => `**${i[0]}** - price: **$${i[1].price}** - description: ${i[1].description}`).join('\n')))
	//Code End

}

module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    usage: "<page>", //if args is set to false you can remove this otherwise describe how to use the command
    command: "shop",
    cooldown: 2, //Cooldown in seconds
	args: false //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}