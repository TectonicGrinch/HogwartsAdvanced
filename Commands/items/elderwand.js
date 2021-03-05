const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    //Code Start
    let itemName = "elderwand";

    let userDB = bot.db.get(message.author.id)

    let item = bot.config.shop[itemName]
    if(!item || !userDB.inv.some(i => i.name == itemName)){

        message.channel.send(bot.embed(`**You bring out the elder wand and hold it up for all to see!**`).attachFiles([`./resources/gifs/.gif`]).setImage(`attachment://quidditcharena.gif`));

    //Code End

}else{
    message.channel.send( 'You do not have the elder wand' );
}
}
module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    usage: "", //if args is set to false you can remove this otherwise describe how to use the command
    command: "elderwand",
    cooldown: 5, //Cooldown in seconds
	args: false //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}