const Discord = require('discord.js');
const REQUIRED_JOB = "death eater"
module.exports.run = async (bot, message, args) => {
    let userDB = bot.db.get(message.author.id)
    if(!userDB.job.hasOwnProperty('name') || (REQUIRED_JOB && userDB.job.name != REQUIRED_JOB))
        return message.channel.send(bot.embed(`You can\'t use this command. ${REQUIRED_JOB ? `You need to work as a ${REQUIRED_JOB}` : `You don't have a job.`}`))

    message.channel.send(bot.embed(`${message.author} marks the sky with the dark lords presence.`).attachFiles([`./resources/jobspells/deatheater/morsmordre.gif`]).setImage(`attachment://morsmordre.gif`).setColor('#000000'));
    
    
    
    //Code End


}

module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    usage: "Mark the sky with The Dark Lord's presence.", //if args is set to false you can remove this otherwise describe how to use the command
    command: "morsmordre",
    cooldown: 5, //Cooldown in seconds
}