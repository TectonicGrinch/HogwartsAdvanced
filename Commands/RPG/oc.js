const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let user = message.author;

let userDB = bot.db.get(message.author.id);
if (!args[0]) {
user.send("Provide a backstory for your character.\n ***limit is 300 Characters of text.***")
}


let say = args.join(" ");
bot.db.push("userDB.backstory", {
    backstory: say,
});
console.log(userDB)
return message.channel.send(`Added: \n\`\`\`${say}\`\`\`\n to backstory. \n*>charactersheet or >cs to see*`)


}




module.exports.config = {
	cmdPerms: ["EMBED_LINKS"],
	usage: "", //if args is set to false you can remove this otherwise describe how to use the command
	command: "oc",
	cooldown: 5, //Cooldown in seconds
	args: false, //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
};
