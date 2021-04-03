const Discrod = require('discord.js');
const util = require('../../Util/utils')


module.exports.run = async (bot, message, args) => {
let roll = util.randomRoll(1, 100);

message.channel.send(bot.embed(`${message.author} rolled a **${roll}** out of **100.**`))


}

module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    desc: "rolls between 1 - 100",
    usage: "", //if args is set to false you can remove this otherwise describe how to use the command
    command: "roll",
    cooldown: 5, //Cooldown in seconds
	args: false //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}