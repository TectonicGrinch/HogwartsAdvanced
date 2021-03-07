const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    //Code Start
   let user = message.mentions.users.first();

    let targetDB = bot.db.get(user.id)
    let userDB = bot.db.get(message.author.id)
    args.shift()
    if(!user){

        message.channel.send(`You are in ${targetDB.location}`)

    }else{
        
        message.channel.send(`You are in ${userDB.location}`)

    }


	//Code End
    console.log(userDB.location)
}

module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    command: "locate",
    cooldown: 5, 
	args: false
}