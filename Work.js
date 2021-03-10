const Discord = require('discord.js');
const REQUIRED_JOB = ""

module.exports.run = async (bot, message, args) => {

    //Code Start
    let userDB = bot.db.get(message.author.id)
    if(!userDB.job.hasOwnProperty('name') || (REQUIRED_JOB && userDB.job.name != REQUIRED_JOB))
        return message.channel.send(bot.embed(`You can\'t use this command. ${REQUIRED_JOB ? `You need to work as a ${REQUIRED_JOB}` : `You don't have a job.`}`))

    
    let reward = Math.floor(Math.random() * (userDB.job.max - userDB.job.min) + userDB.job.min)
    bot.db.add(`${message.author.id}.balance`, reward);

    message.channel.send(bot.embed(`${message.author} went to work and made **$${reward}**.`));
	//Code End

}

module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    command: "work",
    cooldown: 1 * 60 * 60,
	args: false //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}