const Discord = require("discord.js");
const world = require('../json/world.json');
const items = require('../json/items/items.json');

module.exports.run = async (bot, message, args) => {

    
	let command = args[0];
	let city = args[1].toLowerCase();
	console.log(city)
	let requiredItems = getRequiredItemsToTravelTo(city, items.allitems);
	let inv = bot.db.get(message.author.id).inv;


	let user = message.author;
	let locObj = bot.db.get(user.id) || {};
	if(!command)
    
	message.channel.send(bot.embed(`**${user.username}** 
	Location: **${locObj.location || "undefined"}**`));
	console.log(`${user} is located at ${locObj.location || "undefined"}`);
	if(command){
		switch(command){
			case 'list':
				let ret = '';
				for (i in world) {
					let location = world[i];
					ret += `\n${location.name},`;

				}


				 message.channel.send(bot.embed(`${ret}`));

				break;

			case 'travel':
				let itemIdx = locObj.inv.findIndex((i) => requiredItems.includes(i.name));
				console.log(itemIdx)
				if (itemIdx == -1)
					return message.channel.send(
						bot.embed(`You dont have any item that lets you travel there. ( ${requiredItems.join(", ") || "No way to get there"})`));
				let item = inv[itemIdx];
				if (!item.infinite) {
					inv.splice(itemIdx, 1);
					bot.db.set(`${message.author.id}.inv`, inv);
				}
				bot.db.set(`${message.author.id}.location`, city);
				 message.channel.send(bot.embed(`You\'ve travelled to **${city}**`));
				break;
        }
	}







};

function getRequiredItemsToTravelTo(city, items) {
	let ret = [];
	for (let i in items) {
		if (items[i].location == city) {
			ret.push(i);
			continue;
		}
	}
	return ret;
}

module.exports.config = {
	cmdPerms: ["EMBED_LINKS"],
	usage: "[place/city]", //if args is set to false you can remove this otherwise describe how to use the command
	command: "location",
	cooldown: 5, //Cooldown in seconds
	args: false, //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
};
