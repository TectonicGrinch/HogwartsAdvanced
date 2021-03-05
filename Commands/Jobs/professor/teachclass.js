const Discord = require('discord.js');
const classes = require('../../../json/classes.json');
const REQUIRED_JOB = "professor";
const util = require('../../../Util/utils');

module.exports.run = async (bot, message, args) => {
    //Commmand to teach a random class in an array
    //Code Start
    let userDB = bot.db.get(message.author.id)
    if(!userDB.job.hasOwnProperty('name') || (REQUIRED_JOB && userDB.job.name != REQUIRED_JOB))
        return message.channel.send(bot.embed(`You can\'t use this command. ${REQUIRED_JOB ? `You need to work as a ${REQUIRED_JOB}` : `You don't have a job.`}`))

    let reward = Math.floor(Math.random() * (userDB.job.max - userDB.job.min) + userDB.job.min)
    bot.db.add(`${message.author.id}.balance`, reward);
    
    let classest = util.dynamicgenerator(classes)
    console.log(`${message.author.username} used !subteach and taught ${classest}`)

    message.channel.send(bot.embed(`${message.author} filled in for ${classest} class and was paid an extra **$${reward}** for their work.`));
	//Code End
   

}

module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    usage: "Used to allow a teacher to fill in extra classes", //if args is set to false you can remove this otherwise describe how to use the command
    command: "teachclass",
    aliases: ["teach", "teachc"],
    cooldown: 10 * 60, //Cooldown in seconds
	args: false //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}
