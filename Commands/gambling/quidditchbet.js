const Discord = require('discord.js');
const util = require("../../Util/utils");
const quidteam1 = require('../../json/quidditchteams.json');
const quidteam2 = require('../../json/quidditchteams.json');
module.exports.run = async (bot, message, args) => {
    //120000 2 mins collection
//userDB.balance -= price
let userDB = bot.db.get(message.author.id)
let amount = args[0]
let price = Math.round(Number(amount))
if(price > userDB.balance){
  message.channel.send(bot.embed(`You don't have enough money to bet that amount`));

}else{
        let quidteam1t = util.dynamicgenerator(quidteam1)
        let quidteam2t = util.dynamicgenerator(quidteam2)
        let flip = Math.floor(Math.random() * 100) + 1;

        const quidditchEmbed = new Discord.MessageEmbed()
        .setTitle('Quidditch Betting!')
        .setDescription(`A quidditch match has begun between 
        **${quidteam1t}** and **${quidteam2t}**
        PLACE YOUR BETS!!! 
        react with:
        :one: for **$${amount}** on **${quidteam1t}**
        :two: for **$${amount}** on **${quidteam2t}**`
        ).attachFiles([`./resources/locations/quidditcharena.png`]).setImage(`attachment://quidditcharena.png`).setFooter(`Game starts in 30 seconds!`)
    
    let msg = await message.channel.send(quidditchEmbed)

    msg.react("1️⃣")
    msg.react("2️⃣")

    const filter = (r, u) => u.id == message.author.id && (r.emoji.name == "1️⃣" || r.emoji.name == "2️⃣")
   let winnings = (2 * amount);
   let losings =- amount;
    msg.awaitReactions(filter, { time: 60000, max: 1}).then(collected => {
        let emoji = collected.first().emoji.name
      
        if(!emoji.name){
            switch(emoji){


            case '1️⃣':
                if(flip > 50){
                    bot.db.add(`${message.author.id}.balance`, winnings);
            message.channel.send(bot.embed(`**${quidteam1t}** WON!!! YOU GAINED **$${winnings}**`).attachFiles([`./resources/money/money.gif`]).setImage(`attachment://money.gif`))
                }else{
                    bot.db.add(`${message.author.id}.balance`, losings);
                    message.channel.send(bot.embed(`**${quidteam1t}** lost and you lost **$${losings}** Better luck next time.`).attachFiles([`./resources/gifs/harrycry.gif`]).setImage(`attachment://harrycry.gif`))
                }
            break;
           
            case '2️⃣':
                if(flip > 50){
                    bot.db.add(`${message.author.id}.balance`, winnings);
                    message.channel.send(bot.embed(`**${quidteam2t}** WON!!! YOU GAINED **$${winnings}**`).attachFiles([`./resources/money/money.gif`]).setImage(`attachment://money.gif`))
                        }else{
                            bot.db.add(`${message.author.id}.balance`, losings);
                            message.channel.send(bot.embed(`**${quidteam2t}** lost and you lost **$${losings}** Better luck next time.`).attachFiles([`./resources/gifs/harrycry.gif`]).setImage(`attachment://harrycry.gif`))
                        }
            break;



    
 

        }console.log(`${message.author.username} Bet ${amount} with !quidditch bet`)
    }})

}}

module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    usage: "", //if args is set to false you can remove this otherwise describe how to use the command
    command: "quidditchbet",
    aliases: ["quidbet"],
    cooldown: 60, //Cooldown in seconds
	args: true //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields

}

