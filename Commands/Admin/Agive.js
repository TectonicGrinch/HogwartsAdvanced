const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    //Code Start
    let user = message.mentions.users.first();
    args.shift()
    if(!user)
        return message.channel.send(bot.embed('Didnt mention a user'));

    let amount = Number(args.shift())

    if(isNaN(amount))
        return message.channel.send(bot.embed(`Amount is not a number`))

    let reciever = bot.db.get(user.id);

    reciever.balance += amount;

    bot.db.set(user.id, reciever);

    message.channel.send(bot.embed(`${message.author} gave **$${amount}** to ${user}`));
	//Code End

}

module.exports.config = {
    permission: "ADMINISTRATOR",
    usage: "[@user] [amount]", //if args is set to false you can remove this otherwise describe how to use the command
    command: "agive",
    cooldown: 5, //Cooldown in seconds
	args: true //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}