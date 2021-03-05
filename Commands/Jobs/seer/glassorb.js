const Discord = require('discord.js');
const question = require('../../../json/glassorbquestions')
const answer = require('../../../json/glassorbanswers')
const util = require('../../../Util/utils')
const REQUIRED_JOB = "seer"
module.exports.run = async (bot, message, args) => {
    //job restriction
    let userDB = bot.db.get(message.author.id)
    if(!userDB.job.hasOwnProperty('name') || (REQUIRED_JOB && userDB.job.name != REQUIRED_JOB))
        return message.channel.send(bot.embed(`You can\'t use this command. ${REQUIRED_JOB ? `You need to work as a ${REQUIRED_JOB}` : `You don't have a job.`}`))



    //Code Start
    let reward = Math.floor(Math.random() * (userDB.job.max - userDB.job.min) + userDB.job.min)
    bot.db.add(`${message.author.id}.balance`, reward);
    
    
    let answert = Math.floor((Math.random() * answer.length));
    let questiont = Math.floor((Math.random() * question.length));
    
    
    //message
    message.channel.send(bot.embed(`A person approaches ${message.author} and pays $**${reward}** to ask the orb\n ***${question[questiont]}***\n You look down to the orb and it answers \n**${answer[answert]}** \n You tell the person the answer, \n They thank you and then leave...  \n`).attachFiles([`./resources/jobitems/seer/glassorb.png`]).setImage(`attachment://glassorb.png`).setColor('#A140FC'));

}

module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    usage: "question here", //if args is set to false you can remove this otherwise describe how to use the command
    command: "glassorb",
    aliases: ["gorb"],
    cooldown: 30, //Cooldown in seconds
	args: false //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}