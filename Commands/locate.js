const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    //Code Start

   let user = message.author;
   let locObj = bot.db.get(user.id) || {};



        
        message.channel.send(bot.embed(`**${user.username}**
        Location: **${locObj.location}**`));


	//Code End
    console.log(`${user} is located at ${locObj.location}`)
}

module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    command: "locate",
    cooldown: 5, 
	args: false
}