const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let userM = message.mentions.users.first() || message.author;
    let ecoObj = bot.db.get(user.id) || {};
    let command = args[1]
    
    if(!command){
    message.channel.send(bot.embed(`Balance: **$${ecoObj.balance || 0}**\nJob: **${ecoObj.job?.name || 'none'}**`).setAuthor(`${userM.username}'s info`, userM.avatarURL({dynamic: true})));

    }else{
        switch(command){
            case 'top':
                message.channel.send(
                    currency.sort((a, b) => b.balance - a.balance)
                        .filter(user => bot.users.cache.has(user.user_id))
                        .first(10)
                        .map((user, position) => `(${position + 1}) ${(bot.users.cache.get(user.user_id).tag)}: ${user.balance}💰`)
                        .join('\n'),
                    { code: true },
                );
            

                break;

            case user:
    message.channel.send(bot.embed(`Balance: **$${ecoObj.balance || 0}**\nJob: **${ecoObj.job?.name || 'none'}**`).setAuthor(`${userM.username}'s info`, userM.avatarURL({dynamic: true})));

                break;
        }
    }
    
    

}

module.exports.config = {
    usage: "<@user>", //if args is set to false you can remove this otherwise describe how to use the command
    command: "balance",
    aliases: ["bal", "profile"],
    cooldown: 2, //Cooldown in seconds
	args: false //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}