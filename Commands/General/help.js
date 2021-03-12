const fs = require('fs');
const pagination = require('discord.js-pagination');
const Discord = require('discord.js');
const client = new Discord.Client(); 
const config = require('../../Config.json');
module.exports.run = async function(bot, message, args) {
   
    const helpGeneral = new Discord.MessageEmbed()
    .setTitle('General')
    .addField('>help', 'I mean you found your way here you know what it does.')
    .addField('>beta', 'For beta users only lists a bunch of special commands')
    .setTimestamp()

    const helpJob = new Discord.MessageEmbed()
    .setTitle('Job')
    .addField('>job', 'will provide you with arguments for the command.')
    .addField('>job list', 'lists all jobs.')
    .addField('>job apply (name)', 'join the job you named.')
    .addField('>job quit', 'quit your current job.')
    .addField('>work', 'an hourly command that gives you money from your jobs minimum and maximum wage')

    .setTimestamp()

    const helpLocation = new Discord.MessageEmbed()
    .setTitle('Location')
    .addField('>location', 'provides list of locations.')
    .addField('>location travel (name)', 'travel to location if you have the desiered item or command to do so.')
    .addField('>locate', 'shows your location.')
    .setTimestamp()
    
    const helpShop = new Discord.MessageEmbed()
    .setTitle('Shop')
    .addField('>shop', 'displays the shop in your current location.')
    .addField('>buy (name)', 'buy an item listed in the shop.')
    .setTimestamp()
   
    const helpEconomy = new Discord.MessageEmbed()
    .setTitle('Economy')
    .addField('>balance, >bal', 'displays your balance or @\'s.')
    .addField('>givemoney', 'give a user some of your money whether it be trading or a gift.')
    .addField('>daily', 'recieve your daily reward')
    .addField('>quidditchbet (amount)', 'Will prompt you with a quidditch match you may bet on to get winning team simply click the emoticon when they pop up to choose your team')
    .setTimestamp()

   
    const helpInventory = new Discord.MessageEmbed()
    .setTitle('Inventory')
    .addField('>inventory', 'displays the items in your inventory you may also use "inv"')
    .addField('>inventory show (name)', 'shows an item in your inventory for all to see.')
    .setTimestamp()

    const helpItem = new Discord.MessageEmbed()
    .setTitle('Items')
    .addField('>use (name)', 'uses an item(some items might have custom commands you can check by using them or asking if unsure as using them might remove the item)')
    .addField('>itemname', 'some items have custom uses like the broomstick and only require you to say their name like so >broomstick .')

    .setTimestamp()

    const pages = [
        helpGeneral,
        helpJob,
        helpLocation,
        helpShop,   
        helpEconomy,
        helpInventory,      
        helpItem


    ]

    const emojiList = ["⬅️", "➡️"];
    const timeout = '120000';

    pagination(message, pages, emojiList, timeout)

 }

module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    usage: "Help command", //if args is set to false you can remove this otherwise describe how to use the command
    command: "help",
    cooldown: 5, //Cooldown in seconds
	args: false //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}