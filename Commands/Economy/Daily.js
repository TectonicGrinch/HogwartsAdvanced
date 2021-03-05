const { formatTime } = require('../../Util/utils');
const DAY_IN_MS = 24 * 60 * 60 * 1000;

module.exports.run = async (bot, message, args) => {

    //Code Start
    let daily = bot.db.get(`${message.author.id}.daily`)
    if(daily > Date.now())
        return message.channel.send(bot.embed(`You already claimed your daily reward. Come back in **${formatTime(daily - Date.now())}**`));

    bot.db.add(`${message.author.id}.balance`, bot.config.dailyReward);
    bot.db.set(`${message.author.id}.daily`, Date.now() + DAY_IN_MS);

    message.channel.send(bot.embed(`${message.author} claimed **$${bot.config.dailyReward}** as a daily reward`));
	//Code End

}

module.exports.config = {
    command: "daily",
	args: false //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}