const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

let user = message.mentions.users.first() || message.author;

   
   
   
   
   
bot.db.set(message.author.id, { balance: 1000, inv: [], job: {}, daily: 0, location: 'london', bloodType: 'Half-Blood', race: 'Human', specialAttribute: 'none', frogCards: [] })
    message.channel.send(`Successfully reset ${user}'s database.`)
}


module.exports.config = {
    permission: "ADMINISTRATOR",
    cmdPerms: ["EMBED_LINKS"],
    usage: "", //if args is set to false you can remove this otherwise describe how to use the command
    command: "databasereset",
    aliases: ["dbr"],
    cooldown: 5, //Cooldown in seconds
	args: false //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}
