const Discord = require('discord.js');
const wand = require('../../../json/wandConfig.json');
const npcreply = require('../../../json/npcjobreplies.json')
const util = require('../../../Util/utils.js')
const REQUIRED_JOB = "wandmaker"

module.exports.run = async (bot, message, args) => {
    //Commmand to make a random wand
    let userDB = bot.db.get(message.author.id)
    if(!userDB.job.hasOwnProperty('name') || (REQUIRED_JOB && userDB.job.name != REQUIRED_JOB))
        return message.channel.send(bot.embed(`You can\'t use this command. ${REQUIRED_JOB ? `You need to work as a ${REQUIRED_JOB}` : `You don't have a job.`}`))

    
    let reward = Math.floor(Math.random() * (userDB.job.max - userDB.job.min) + userDB.job.min)
    bot.db.add(`${message.author.id}.balance`, reward);

let wandwoodt = util.dynamicgenerator(wand.wandwood) 
let wandcoret = util.dynamicgenerator(wand.wandcore) 
let wandsizet = util.dynamicgenerator(wand.wandsize)  
let npcreplyt = util.dynamicgenerator(npcreply)  
let hourst = util.dynamicgenerator(wand.hoursRequired)

//console.log("wood type = ${wandwoodT}")
console.log(`WandGenerated: Username:${message.author.username} Wood:${wandwoodt} Wand core:${wandcoret} Wand size:${wandsizet} Hours to make:${hourst} Amount Earned:${reward}`)

message.channel.send(bot.embed(`${message.author} A customer comes into the store and requests for you to make them a wand that will suit their needs
you get to work and in **${hourst}** you make the wand for them. 
Wood: **${wandwoodt}** 
Core: **${wandcoret}** 
Size: ***${wandsizet} "*** 
They Reply with **${npcreplyt}** before leaving the shop.`)
.setFooter(`you were paid $${reward} for your work.`, 'https://i.imgur.com/DxtDLjy.png'));
    
    
    
    //Code End
}

module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    usage: "Used to make a wand as a wandmaker.", //if args is set to false you can remove this otherwise describe how to use the command
    command: "makewand",
    aliases: ["mwand"],
    cooldown: 10, //Cooldown in seconds
	args: false //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}