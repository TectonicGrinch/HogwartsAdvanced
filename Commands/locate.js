const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    //Code Start

   let user = message.mentions.users.first() || message.author;
   let locObj = bot.db.get(user.id) || {};



        
        message.channel.send(bot.embed(`**${user.username}**
        Location: **${locObj.location}**`));


	//Code End
    console.log(locObj.location)
}

module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    command: "locate",
    cooldown: 5, 
	args: false
}