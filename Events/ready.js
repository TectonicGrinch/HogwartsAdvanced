module.exports = async (bot) => {
    bot.user.setActivity(bot.config.activity, { type: 'PLAYING'}).catch(console.error);

    console.log('Bot is Online')
};

