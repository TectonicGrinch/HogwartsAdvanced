const Discord = require('discord.js');
const nerds = require('nerds');
module.exports.run = async (bot, message, args) => {



 
    let promise = nerds.resolve('Harry Potter').asPromise();
    for(var info in promise){
        message.channel.send(info.first)
    }
    

}

module.exports.config = {

    cmdPerms: ["EMBED_LINKS"],
    usage: "", //if args is set to false you can remove this otherwise describe how to use the command
    command: "t",
    cooldown: 5, //Cooldown in seconds
	args: false //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}