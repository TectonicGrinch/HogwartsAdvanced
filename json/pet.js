const Discord = require('discord.js');
const fs = require('fs');
const petPath = require('../../json/pets');
const petPathRead = fs.readFileSync(petPath);
const petFile = JSON.parse(petPathRead);
const userId = message.author.id
module.exports.run = async (bot, message, args) => {

    if (!petFile[userId]) { //this checks if data for the user has already been created
        petFile[userId] = {pet: "",petName: ""}; //if not, create it
        fs.writeFileSync(petPath, JSON.stringify(petFile, null, 2));
    }else{
    let opt = args.shift().toLowerCase();
    let petName = petFile.userId.petName

    switch(opt){
       case opt[1]:
           switch(!petName){
               case opt[2]:
                   message.channel.send(bot.embed(`your pet is now named ${opt[2]}`))
                   break;
                default:
                   message.channel.send(bot.embed(`your pet has already been named.`)) 
                break;
           }
        



           break;
        
        
           default:
               message.channel.send(bot.embed(`>pet name | play | explore`))


    }



    }

}

module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    usage: "", //if args is set to false you can remove this otherwise describe how to use the command
    command: "pet",
    cooldown: 5, //Cooldown in seconds
	args: true //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}