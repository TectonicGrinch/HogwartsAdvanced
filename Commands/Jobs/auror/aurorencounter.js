const Discord = require('discord.js');
const util = require('../../../Util/utils.js');
const encounters = require(`../../../json/encounterConfig.json`);
const REQUIRED_JOB = "auror"
module.exports.run = async (bot, message, args) => {
    //Commmand to teach a random class in an array
    //Code Start
    let userDB = bot.db.get(message.author.id)
    if(!userDB.job.hasOwnProperty('name') || (REQUIRED_JOB && userDB.job.name != REQUIRED_JOB))
        return message.channel.send(bot.embed(`You can\'t use this command. ${REQUIRED_JOB ? `You need to work as a ${REQUIRED_JOB}` : `You don't have a job.`}`))

    //Code Start
    let aurorEncounters = encounters.jobEncounters.auror
    let encounter = aurorEncounters[Object.keys(aurorEncounters)[Math.floor(Math.random() * Object.keys(aurorEncounters).length)]]

    const encounterEmbed = new Discord.MessageEmbed()
        .setTitle(encounter.title)
        .setDescription(encounter.action)
        .setColor('RANDOM')
        .setTimestamp()

    let msg = await message.channel.send(encounterEmbed)

    msg.react(encounter.option1.emoji)
    msg.react(encounter.option2.emoji)
    msg.react(encounter.option3.emoji)

    const filter = (r, u) => u.id == message.author.id && (r.emoji.name == encounter.option1.emoji || r.emoji.name == encounter.option2.emoji || r.emoji.name == encounter.option3.emoji)

    msg.awaitReactions(filter, { time: 60000, max: 1}).then(collected => {
        let emoji = collected.first().emoji.name
        let opt = Object.values(encounter).find(o => o.emoji == emoji)
        let isSuccessful = Math.random() <= opt.chance
        if(!isSuccessful)
            return message.channel.send(bot.embed(opt.failMessage))
        switch(opt.reward.type){
            case 'money':
                bot.db.add(`${message.author.id}.balance`, opt.reward.value)
                break

            case 'item': 
                let item = bot.config.shop[opt.reward.value]
                if(item){
                    let userDB = bot.db.get(message.author.id)
                    let idx = userDB.inv.findIndex(i => i.name == opt.reward.value)
                    if(idx == -1){
                        userDB.inv.push({ name: opt.reward.value, amount: 1, response: item.response })
                    }else{
                        userDB.inv[idx].amount++;
                    }
                    bot.db.set(message.author.id, userDB)
                }
                break

            case 'nothing':
                break;
                
        }
        message.channel.send(bot.embed(opt.successMessage))
    })
	//Code End

}

module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    command: "aurorencounter",
    cooldown: 5, //Cooldown in seconds
	args: false //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}