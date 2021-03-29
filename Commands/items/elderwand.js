const Discord = require('discord.js');
const invFuncs =require('../../Util/invFuncs');

module.exports.run = async (bot, message, args) => {
    //Code Start
    let itemName = "elderwand";

    let userDB = bot.db.get(message.author.id);
    let item = invFuncs.invHasItem(message.author, itemName)


    if(!item){

  message.channel.send(bot.embed(`**You do not have The Elder Wand!**`));

    //Code End

}else{

   let args1 = args[0]
    switch(!args1){
     case 'info':
         message.channel.send(bot.embed(`The Elder Wand is not just any old wand... This wand is a WAND OF POWER!`))
         break;
     case 'display':
        message.channel.send(bot.embed(`You display The Elder Wand for all to see!`)).attachFiles([`./resources/gifs/.gif`]).setImage(`attachment://quidditcharena.gif`);
         break;
     case 'duel':

        let mention = message.mentions.users.first();
        let reward = 10000;
        let flip = Math.floor(Math.random(1 * 101));
          
            if(flip > 65){
                bot.db.add(`${message.author.id}.balance`, reward);
         message.channel.send(bot.embed(`You approach ${mention} and pull out the elder wand challenging them to a duel... They oblige you realise you might of made a mistake duelling them. The duel lasts for **${hrst}** and you end up Winning you keep the elderwand and also get **$${reward}**`))

            }else{


         message.channel.send(bot.embed(`You approach ${mention} and pull out the elder wand challenging them to a duel... They oblige you realise you might of made a mistake duelling them. The duel lasts for **${hrst}** and you end up LOSING THE DUEL! THE ELDER WAND PASSES ONTO ${mention}`))

            }


     

         break;



  
     default:
        message.channel.send(bot.embed(`>elderwand display | duel`))
        break;
    }
}
}
module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    usage: "", //if args is set to false you can remove this otherwise describe how to use the command
    command: "elderwand",
    cooldown: 5, //Cooldown in seconds
	args: false //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}