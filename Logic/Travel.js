function findLocation(args) {
	let ret = [];
	for (arg in args) {
		if (args[arg] == args[0]) continue;
		else ret.push(args[arg]);
	}
	return ret;
}

function canTravel(userDB, destination) {
	allItems = require("../json/items/items.json");
	let requiredItems = [];
	for (let i in allItems) {
		if (allItems[i].location == destination) {
			requiredItems.push(i);
		}
	}
	if (userDB.inv.findIndex((i) => requiredItems.includes(i.name)) == -1) return false;
	//  message.channel.send(bot.embed(`You dont have any item that lets you travel to there. ( ${requiredItems.join(", ") || "No way to get there"})`));
	else return true;
}

function travelTo(args, bot, message) {
	const world = require(`../json/world.json`);
	let userDB = bot.db.get(message.author.id) || {};
	let destination = findLocation(args).join("").toLowerCase();
	if (canTravel(userDB, destination)) {
		for (place in world) {
			if (place == destination) {
				bot.db.set(`${message.author.id}.location`, place);
				message.channel.send(bot.embed(`${message.author} Used their broomstick to travel to ${world[`${place}`].name}.`));
				//To be removed after Alpha
				console.log(`${message.author.username} has travelled from ${userDB.location} to ${place}`);
				break;
			}
		}
	}
  console.log("user cannot travel")
}

module.exports = {
	travelTo
};
