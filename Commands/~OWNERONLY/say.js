const Discord = require("discord.js");
const invFuncs = require('../../Util/invFuncs');
module.exports.run = async (bot, message, args) => {
const user = message.author;

if (!args[0]) {
user.send("Provide a backstory for your character.\n ***limit is 300 Characters of text.***")
}



const say = args.join(" ");
message.channel.send(say)
message.delete()
}


module.exports.config = {
	cmdPerms: ["EMBED_LINKS"],
	usage: "", //if args is set to false you can remove this otherwise describe how to use the command
	command: "say",
	cooldown: 5, //Cooldown in seconds
	args: false, //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
};
