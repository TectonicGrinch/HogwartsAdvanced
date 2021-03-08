const Discord = require('discord.js');
const REQUIRED_JOB = "shopkeeper";
const util = require('../../../Util/utils');

module.exports.run = async (bot, message, args) => {
    //Commmand to teach a random class in an array
    //Code Start
    let userDB = bot.db.get(message.author.id)
    if(!userDB.job.hasOwnProperty('name') || (REQUIRED_JOB && userDB.job.name != REQUIRED_JOB))
        return message.channel.send(bot.embed(`You can\'t use this command. ${REQUIRED_JOB ? `You need to work as a ${REQUIRED_JOB}` : `You don't have a job.`}`))

    let reward = Math.floor(Math.random() * (userDB.job.max - userDB.job.min) + userDB.job.min)
    bot.db.add(`${message.author.id}.balance`, reward);
    

    console.log(`${message.author.username} did work in Diagon Alley and recieved $${reward}`)

    message.channel.send(bot.embed(`${message.author} Went to work at their shop and was paid **$${reward}** for their work.`));
	//Code End
   

}

  //  let classest = util.dynamicgenerator(classes)

module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    usage: "", //if args is set to false you can remove this otherwise describe how to use the command
    command: "shopkeep",
    location: "diagon alley",
    aliases: ["shopk"],
    cooldown: 10 * 60, //Cooldown in seconds
	args: false //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}