
module.exports = async (bot, message) => {

    if(message.author.bot) return;

    let prefix = bot.config.prefix

    if(!bot.db.has(message.author.id)){
        bot.db.set(message.author.id, { balance: 1000, inv: [], job: {}, daily: 0, location: 'London' })
    }

    if (message.content.startsWith(prefix)){
        let cmd = require('./subEvents/command.js');
        cmd.run(bot, message, prefix);
    }
}