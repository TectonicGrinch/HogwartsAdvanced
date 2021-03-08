const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    //Code Start
   let user = message.mentions.users.first();

    let userDB = bot.db.get(message.author.id)



        
        message.channel.send(bot.embed(`You are in **${userDB.location}**`));


	//Code End
    console.log(userDB.location)
}

module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    command: "locate",
    cooldown: 5, 
	args: false
}