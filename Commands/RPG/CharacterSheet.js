const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    //Code Start
    let user = message.mentions.users.first() || message.author;
    let fetchObj = bot.db.get(user.id)
    message.channel.send(bot.embed(`**Character Sheet**
    **Race:** ${fetchObj.race}
    **Bloodtype:** ${fetchObj.bloodType}
    **Special Attribute:** ${fetchObj.SpecialAttribute || 'none'}
    **Job:** ${fetchObj.job || 'Unemployed'}
    **Balance:** $${fetchObj.balance}`).setAuthor(`${user.username}'s Character
    **Backstory:** ${fetchObj.backstory}`, user.avatarURL({dynamic: true})));
	//Code End

}

module.exports.config = {
    usage: "<@user>", //if args is set to false you can remove this otherwise describe how to use the command
    command: "charactersheet",
    aliases: ["cs"],
    cooldown: 2, //Cooldown in seconds
	args: false //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}