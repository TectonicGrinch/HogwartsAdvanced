const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    //Code Start
    message.channel.send('You are in prague')
	//Code End

}

module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    command: "testoutside",
    cooldown: 5, 
    location: 'london',
	args: false
}