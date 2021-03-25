const Discord = require('discord.js');
const locations = require('../../Config.json');
module.exports.run = async (bot, message, args) => {

    
    let user = message.mentions.users.first();

   let args1 = args[1];


    if(!user){
        message.channel.send(bot.emebd(`You did not mention someone.`))
    }else{

        bot.db.set(user.id, { location: args1 })

        message.channel.send(bot.embed(`${user}'s location was set to ${args1}`))

        console.log(args1)


    }

}

module.exports.config = {
    permission: "ADMINISTRATOR",
    cmdPerms: ["EMBED_LINKS"],
    usage: "@user [location]", //if args is set to false you can remove this otherwise describe how to use the command
    command: "setlocation",
    cooldown: 5, //Cooldown in seconds
	args: true //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}