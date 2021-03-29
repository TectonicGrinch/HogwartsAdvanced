const Discord = require('discord.js');
const fs = require('fs')
const bot = new Discord.Client();




bot.db = require('quick.db')

bot.config = require('./Config.json');
bot.allitems = require('./json/items/items.json');
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.cooldowns = new Discord.Collection();

require('./Handlers/Commands.js')(bot);
require('./Handlers/Events.js')(bot);

bot.embed = (m) => {
    return new Discord.MessageEmbed()
        .setDescription(m)
        .setColor('RANDOM')
        .setTimestamp();



}





bot.login(bot.config.token);

