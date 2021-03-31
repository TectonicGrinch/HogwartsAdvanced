module.exports = async (bot) => {
	bot.user.setActivity(bot.config.activity, { type: "PLAYING" }).catch(console.error);
	console.log("initializing Configs");
	initLocationalConfigs(bot.config);
	console.log("Bot is Online");

	function initLocationalConfigs(mainConfig) {
		petConfig = require("../json/petConfig.json");
		encounterConfig = require("../json/encounterConfig.json");
		worldConfig = require("../json/world.json");
    //add pets
		for (i in petConfig.locationalPets) {
			let petObj = petConfig.locationalPets[i];
			for (a in worldConfig) {
				let worldKey = worldConfig[a].petShop;
				addToLocation(worldKey, a, petObj.locationsAvailable, petObj, i);
			}
		}
    //add encounters
    for (i in encounterConfig.locationalEncounters) {
			let encounterObj = encounterConfig.locationalEncounters[i];
			for (a in worldConfig) {
				let worldKey = worldConfig[a].encounters;
				addToLocation(worldKey, a, encounterObj.locationsAvailable, encounterObj, i);
			}
		}
	}

	function addToLocation(worldKey, worldString, locationsAvailable, objectToAdd, objName) {
		for (x in locationsAvailable) {
			let location = locationsAvailable[x];
			if (location == worldString) {
        console.log(`adding object ${objName} to location ${worldString}`)
				worldKey[`${objName}`] = objectToAdd;
			} else continue;
		}
	}
};
