const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {


        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.reply("You do not have the perms to use this cmd! missing perms: `ADMINISTRATOR`")
        }
        let reason = args.join(" ") || "No reason specified."
        if(!message.channel.deletable) {
            return message.reply("This channel cannot be obliviated.")
        }
        let newchannel = await message.channel.clone()
        await message.channel.delete()
        let embed = new MessageEmbed()
        .setTitle(`Obliviate \`${message.channel.name}\` **has been Obliviated**`)
        .setDescription(reason)
        .setImage('https://i.imgur.com/FnLhj9s.jpeg')
        await newchannel.send(embed)
    }

module.exports.config = {
    permission: "ADMINISTRATOR",
    usage: "[@user] [amount]", //if args is set to false you can remove this otherwise describe how to use the command
    command: "aobliviate",
    cooldown: 5, //Cooldown in seconds
	args: false //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}