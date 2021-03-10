const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    //Code Start
    let itemName = args.join(' ').toLowerCase()
    let userDB = bot.db.get(message.author.id)

    let idx = userDB.inv.findIndex(i => i.name == itemName)
    if(idx == -1)
        return message.channel.send(bot.embed('No item found in your inventory under that name.'))

    if(userDB.inv[idx].infinite)
        var item = userDB.inv[idx]
    else{
        var item = userDB.inv.splice(idx, 1)[0]
        bot.db.set(message.author.id, userDB)
    }
    message.reply(item.response)
	//Code End

}

module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    usage: "[item name]", //if args is set to false you can remove this otherwise describe how to use the command
    command: "use",
    cooldown: 5, //Cooldown in seconds
	args: true //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}