const Discord = require('discord.js');
const util = require('../../../Util/utils');


const REQUIRED_JOB = "quidditch star"
module.exports.run = async (bot, message, args) => {

    //Code Start
    let userDB = bot.db.get(message.author.id)
    if(!userDB.job.hasOwnProperty('name') || (REQUIRED_JOB && userDB.job.name != REQUIRED_JOB))
        return message.channel.send(bot.embed(`You can\'t use this command. ${REQUIRED_JOB ? `You need to work as a ${REQUIRED_JOB}` : `You don't have a job.`}`))

        let reward = Math.floor(Math.random() * (userDB.job.max - userDB.job.min) + userDB.job.min)
 
 
        let quidditchoutcome = util.randomRoll(1, 101)
        console.log(`${message.author.username} used !quidditchgame and rolled a ${quidditchoutcome}`)

if(quidditchoutcome > 50){
   message.channel.send(bot.embed(`${message.author}'s team lost and they were not rewarded for their effort.`).attachFiles([`./resources/joboutcomes/quidditchstar/lost.png`]).setImage(`attachment://lost.png`).setColor('#000000'));

}else{

    bot.db.add(`${message.author.id}.balance`, reward);
    message.channel.send(bot.embed(`**${message.author}'s** ***TEAM WON THE QUIDDITCH MATCH*** \n and was paid **$${reward} for winning.**`).attachFiles([`./resources/joboutcomes/quidditchstar/won.png`]).setImage(`attachment://won.png`).setColor('#FBF700'));
	//Code End

}}

module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    usage: "", //if args is set to false you can remove this otherwise describe how to use the command
    command: "quidditchgame",
    aliases: ["quidgame", "qgame", "qmatch", "quidditchmatch"],
    cooldown: 5, //Cooldown in seconds
	args: false //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}