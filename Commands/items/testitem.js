const Discord = require("discord.js");
const invFuncs = require('../../Util/invFuncs');
module.exports.run = async (bot, message, args) => {
	let item = args[0];
    let userDB = bot.db.get(message.author.id);

    if(!item){
        return message.channel.send(`you didn't list an item.`);
    }

    if(!invFuncs.invHasItem(message.author, item, message, bot)){
    }
    
    if(item) {
        for(i in item){
            if(item == 'bertiebotts')
                 return message.channel.send(`${item} achieved!`);
            
            if(item == 'broomstick')
                return message.channel.send(`${item} achieved!`);
            
            if(item == 'test')//if this pops up it means something checking items is broken
                return message.channel.send(`test passed!`);
                
            }
        }
}


    

module.exports.config = {
	cmdPerms: ["EMBED_LINKS"],
	usage: "", //if args is set to false you can remove this otherwise describe how to use the command
	command: "ti",
	cooldown: 5, //Cooldown in seconds
	args: false, //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
};
