const Discord = require('discord.js');
const util = require("../../Util/utils");

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.first() || message.author
    let userDB = bot.db.get(user.id);
    
    message.channel.send(bot.embed(`Welcome to the developer panel what would you like to do?
    1. Set location
    2. Give money
    3. Give item
    4. Reset database`))
msg.react()
    msg.awaitReactions(filter, { time: 60000, max: 1}).then(collected => {
        let emoji = collected.first().emoji.name
      
        if(!emoji.name){
            switch(emoji){


            case '1️⃣':


            break;
           
            case '2️⃣':
                      message.channel.send(`how much money? `)
            break;

            case '3️⃣':
                      message.channel.send(`how much money? `)
            break;

            case '4️⃣':
                      message.channel.send(`reset ${user.username} database`)
            break;



    
 



}}
    })}
module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    usage: "", //if args is set to false you can remove this otherwise describe how to use the command
    command: "quidditchbet",
    aliases: ["quidbet"],
    cooldown: 60, //Cooldown in seconds
	args: false //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields

}

