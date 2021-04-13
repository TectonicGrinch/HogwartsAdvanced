const Discord = require('discord.js');
const util = require(`../../Util/utils`)
module.exports.run = async (bot, message, args) => {

let number = args[0];

if(isNaN(number)){
 return message.channel.send(`Amount isnt a number or no amount listed. !randommention (number)`);
}else{

let ret = "";


let i = 0;
while(i < number){
    let randomMember = message.guild.members.cache.random();
    if(randomMember.bot){
       break;
    } else { //better be safe
        i ++; //It'll go forward if the user isn't a bot
        ret += `\n${randomMember}`;
    }
}
message.channel.send(`**User(s) Selected:** ${ret}`);
  



}}

module.exports.config = {

    cmdPerms: ["EMBED_LINKS"],
    usage: "", //if args is set to false you can remove this otherwise describe how to use the command
    command: "randommention",
    alises: ["rm"],
    cooldown: 5, //Cooldown in seconds
	  args: false //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}