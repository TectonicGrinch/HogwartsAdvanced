const Discord = require('discord.js');
const util = require('../../Util/utils');
const trickarray = require(`../../json/broomtricks`);

const invFuncs = require(`../../Util/invFuncs`)


module.exports.run = async (bot, message, args) => {

    let mention = message.mentions.users.first();
    let london = "london";
    let godricshollow = "godrics hollow";
    let ministry = "ministry of magic";


    let args1 = args[0]
    let args2 = args[1]

    let itemName = "broomstick";
    let userDB = bot.db.get(message.author.id)
    let item = invFuncs.invHasItem(message.author, itemName)

    if(!item){
        message.channel.send(bot.embed(`You don't have a broomstick`))
    }else{



       
        switch(args1){

            case 'travel':
                 switch (args2){
                     case 'london':
                        bot.db.set(`${message.author.id}.location`, london)
                        message.channel.send(bot.embed(`${message.author} Used their broomstick to travel to london.`))
                     break;
                     
                     case 'godrics':
                        bot.db.set(`${message.author.id}.location`, godricshollow)
                        message.channel.send(bot.embed(`${message.author} Used their broomstick to travel to godrics hollow.`))

                        break;
                     case 'ministry':
                        bot.db.set(`${message.author.id}.location`, ministry)                        
                        message.channel.send(bot.embed(`${message.author} Used their broomstick to travel to The Ministry Of Magic`))    
                      
                         break;
                        default:
                         message.channel.send(bot.embed(`london | godrics hollow| ministry`))
                         break;
                        

                }
                console.log(`${message.author.username} has travelled from ${userDB.location} to ${args2}`)
            break;

            case 'race':
                let flip = Math.floor(Math.random(1 * 101))
                switch(!mention){
                      case flip > 51:
                        message.channel.send(bot.embed(`You race ${mention || `a random`} and placed **1st**`))
                        break;

                      case flip < 50:
                        message.channel.send(bot.embed(`You race ${mention || `a random`} and placed **last**`))
                        break;

                };
                break;
            case 'trick':
                let trick = util.dynamicgenerator(trickarray);
                message.channel.send(`You decide to do a trick on your broom you do a **${trick}**.`)
                break;
            

            
        default:
            message.channel.send(bot.embed(`>broomstick travel | race | trick  `))
          
        
             }
            }

    
	//Code End

}

module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    usage: "test", //if args is set to false you can remove this otherwise describe how to use the command
    command: "broomstick",
    cooldown: 1 * 60, //Cooldown in seconds
	args: false //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}