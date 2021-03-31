const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if (!args.length) return message.channel.send(bot.embed(bot.config.locations.join(",\n ")).setTitle("Locations"));
	let city = args.join(" ").toLowerCase();
	let requiredItems = getRequiredItemsToTravelTo(city, bot.itemIndex.allItems);
	let inv = bot.db.get(message.author.id).inv;
	let itemIdx = inv.findIndex((i) => requiredItems.includes(i.name));

	if (itemIdx == -1)
		return message.channel.send(
			bot.embed(`You dont have any item that lets you travel there. ( ${requiredItems.join(", ") || "No way to get there"})`));
	let item = inv[itemIdx];
	if (!item.infinite) {
		inv.splice(itemIdx, 1);
		bot.db.set(`${message.author.id}.inv`, inv);
	}
	bot.db.set(`${message.author.id}.location`, city);
	return message.channel.send(bot.embed(`You\'ve travelled to **${city}**`));
	//Code End
};

function getRequiredItemsToTravelTo(city, allItems) {
	let items = [];
	for (let i in allItems) {
		if (allItems[i].location == city) {
			items.push(i);
			continue;
		}
	}
	return items;
}

module.exports.config = {
	cmdPerms: ["EMBED_LINKS"],
	usage: "[place/city]", //if args is set to false you can remove this otherwise describe how to use the command
	command: "location",
	cooldown: 5, //Cooldown in seconds
	args: false, //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
};
