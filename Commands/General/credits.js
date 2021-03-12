const fs = require('fs');
const pagination = require('discord.js-pagination');
const Discord = require('discord.js');
const client = new Discord.Client(); 
const config = require('../../Config.json');
module.exports.run = async function(bot, message, args) {
   
    const creditsDeveloper = new Discord.MessageEmbed()
    .setTitle('Developers')
    .addField('ViridianZe', 'Main Developer')


    .setTimestamp()
   
    const creditsContributor = new Discord.MessageEmbed()
    .setTitle('Contributors')
    .addField('Alexandre Silveira', 'Helped write Encounters')
    .addField('KingMyrddin', 'Helped with alot of lore and overall features.')


    .setTimestamp()

    const creditsBeta = new Discord.MessageEmbed()
    .setTitle('Beta Testers')
    .addField('Vahlgoul', 'Helped test features')
    .addField('Alexandre Silveira', 'Helped with beta and encounters')
    .addField('KingMyrddin', 'helped with many beta features.')


    .setTimestamp()

    const creditsSupporter = new Discord.MessageEmbed()
    .setTitle('Supporters')
    .addField('Vahlgoul', 'Massive thanks to this man he kept me going. Check out his CK2 mod Wizarding world.')
    .addField('JuicyShark', 'Helped with both coding and supporting')


    .setTimestamp()


    const pages = [
        creditsDeveloper,
        creditsContributor,
        creditsBeta,
        creditsSupporter
    ]

    const emojiList = ["⬅️", "➡️"];
    const timeout = '120000';

    pagination(message, pages, emojiList, timeout)

 }

module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    usage: "Credits command", //if args is set to false you can remove this otherwise describe how to use the command
    command: "credits",
    cooldown: 5, //Cooldown in seconds
	args: false //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}