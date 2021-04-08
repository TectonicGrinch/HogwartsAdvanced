
module.exports = async (bot, message) => {

    if(message.author.bot) return;

    let prefix = bot.config.prefix

    if(!bot.db.has(message.author.id)){
        bot.db.set(message.author.id, { health: 100, balance: 1000, inv: [], job: {}, daily: 0, location: 'london', bloodType: 'Half-Blood', race: 'Human', specialAttribute: 'none', frogCards: [] })
    }

    if (message.content.startsWith(prefix)){
        let cmd = require('./subEvents/command.js');
        cmd.run(bot, message, prefix);
    }

}