const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let user = message.author.username
    let itemName = "betakey";
    let opt = args.shift()
    
    let array = ['info', 'special', 'flex', 'default']
    
    if(opt[0]){

      if(array.prototype.includes()){
    
        if (opt[0] === 'info'){
            message.channel.send(`info`);

        }
        if (opt[0] === 'special'){
            message.channel.send('special')

        }
        if(opt[0] === 'flex'){
    
            message.channel.send('flex')

        }
        if(opt[0] === 'default'){
            message.channel.send('>betauser info | special | flex')

    
    
        }
    }
    }else{
        message.channel.send('error')
    }
    console.log(a)
}

module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    usage: "Beta users only.", //if args is set to false you can remove this otherwise describe how to use the command
    command: "betauser",
    aliases: ["bu"],
    cooldown: 5, //Cooldown in seconds
	args: false //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}