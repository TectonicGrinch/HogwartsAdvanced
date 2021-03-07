const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    //Code Start
    let userDB = bot.db.get(message.author.id)
    message.channel.send('You are in diagon alley')
	//Code End
    console.log(userDB.location)
}

module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    command: "test",
    cooldown: 5, 
    location: 'diagon alley',
	args: false
}