const Discord = require('discord.js');
const wand = require('../../../json/wandConfig.json');
const npcreply = require('../../../json/npcReplies.json');
const util = require('../../../Util/utils.js');
const jobFuncs = require('../../../Util/jobFuncs');

module.exports.run = async (bot, message, args) => {

    let hasJob = jobFuncs.hasJob(message.author, 'wandmaker')
    if(!hasJob){

     message.channel.send('Incorrect Job')
    }else{


 /*   let userDB = bot.db.get(message.author.id)
    
    let reward = Math.floor(Math.random() * (userDB.job.max - userDB.job.min) + userDB.job.min)
    bot.db.add(`${message.author.id}.balance`, reward);*/
let reward = 100
let wandwoodt = util.dynamicgenerator(wand.wandwood) 
let wandcoret = util.dynamicgenerator(wand.wandcore) 
let wandsizet = util.dynamicgenerator(wand.wandsize)  
let npcreplyt = util.dynamicgenerator(npcreply.goodJobReply)  
let hourst = util.dynamicgenerator(wand.hoursRequired)

//console.log("wood type = ${wandwoodT}")
console.log(`WandGenerated: Username:${message.author.username} Wood:${wandwoodt} Wand core:${wandcoret} Wand size:${wandsizet} Hours to make:${hourst} Amount Earned:${reward}`)

message.channel.send(bot.embed(`${message.author} A customer comes into the store and requests for you to make them a wand that will suit their needs
you get to work and in **${hourst}** you make the wand for them. 
Wood: **${wandwoodt}** 
Core: **${wandcoret}** 
Size: ***${wandsizet} "*** 
They Reply with **${npcreplyt}** before leaving the shop.`)
.setFooter(`you were paid $${reward} for your work.`));
    
    
    

}
}

module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    usage: "Used to make a wand as a wandmaker.", 
    command: "makewand",
    aliases: ["mwand"],
    cooldown: 10, 
	args: false 
}