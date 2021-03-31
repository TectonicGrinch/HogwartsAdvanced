const Discord = require("discord.js");
const util = require("../../Util/utils");
const trickarray = require(`../../json/broomtricks`);
const invFuncs = require(`../../Util/invFuncs`);
const world = require(`../../json/world.json`);

module.exports.run = async (bot, message, args) => {
  let mention = message.mentions.users.first();

  let command = args[0];
  let location = findLocation(args);
  location = location.join("").toLowerCase();

  let userDB = bot.db.get(message.author.id);
  let broomstick = invFuncs.invHasItem(message.author, "broomstick");

  if (!broomstick) {
    message.channel.send(bot.embed(`You don't have a broomstick`));
  } else {
    switch (command) {
      case "travel":
        for (place in world) {
          if (place == location) {
            bot.db.set(`${message.author.id}.location`, place);
            message.channel.send(
              bot.embed(
                `${message.author} Used their broomstick to travel to ${
                  world[`${place}`].name
                }.`
              )
            );
            console.log(
              `${message.author.username} has travelled from ${userDB.location} to ${place}`
            );
            break;
          }
        }
        break;
      case "race":
        let flip = Math.floor(Math.random(1 * 101));
        switch (!mention) {
          case flip > 51:
            message.channel.send(
              bot.embed(`You race ${mention || `a random`} and placed **1st**`)
            );
            break;

          case flip < 50:
            message.channel.send(
              bot.embed(`You race ${mention || `a random`} and placed **last**`)
            );
            break;
        }
        break;
      case "trick":
        let trick = util.dynamicgenerator(trickarray);
        message.channel.send(
          `You decide to do a trick on your broom you do a **${trick}**.`
        );
        break;

      default:
        message.channel.send(bot.embed(`>broomstick travel | race | trick  `));
    }
  }

  function findLocation(args) {
    let ret = [];
    for (arg in args) {
      if (args[arg] == args[0]) continue;
      else ret.push(args[arg]);
    }
    return ret;
  }
};

module.exports.config = {
  cmdPerms: ["EMBED_LINKS"],
  usage: "test", //if args is set to false you can remove this otherwise describe how to use the command
  command: "broomstick",
  cooldown: 1 * 60, //Cooldown in seconds
  args: false, //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
};
