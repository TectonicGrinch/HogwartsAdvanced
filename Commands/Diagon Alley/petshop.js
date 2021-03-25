const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    //Code Start

    let userDB = bot.db.get(message.author.id)

  //  db.get('myBalance') // -> null

    const petEmbed = new Discord.MessageEmbed()
    .setTitle('The Magical Menagerie')
    .setDescription(`***You are welcomed by a shopkeeper***
    Welcome to The Magical Menagerie
    here you will find a pet for all your needs
    what are your needs by the way?
    Each pet is worth $150.
    React to buy:
   **Owl:🦉**
    Health: 60
    Damage: 20
   **Cat:🐱**
    Health: 50
    Damage: 30
    **Toad:🐸**
    Health: 60
    Damage: 20`
    ).attachFiles([`./resources/locations/magicalmenagerie.png`]).setImage(`attachment://magicalmenagerie.png`).setFooter(`Buying a new pet will reset your pet level!`)

let msg = await message.channel.send(petEmbed)
let Owl = 'owl'
let test = 'test'
msg.react("🦉")
msg.react("🐱")
msg.react("🐸")

const filter = (r, u) => u.id == message.author.id && (r.emoji.name == "🦉" || r.emoji.name == "🐱" || r.emoji.name == "🐸")

msg.awaitReactions(filter, { time: 60000, max: 1}).then(collected => {
    let emoji = collected.first().emoji.name

    switch(emoji){

        case '🦉':
            bot.db.push('userDB.pet', { petType: Owl, petName: test, petLevel: 0, petDamage: 20, petHealth: 60  })
            message.channel.send(bot.embed(`You have brought a Owl!`))
            break;
        case '🐱':
            bot.db.push(message.author.id, {pet: {petType: 'Cat', petName: '', petLevel: 0, petDamage: 30, petHealth: 50  }})
            message.channel.send(bot.embed(`You have brought a Cat!`))
            break;
        case '🐸':
            bot.db.push(message.author.id, {pet: {petType: 'Toad', petName: '', petLevel: 0, petDamage: 20, petHealth: 60  }})
            message.channel.send(bot.embed(`You have brought a Toad!`))
            break;





    }



console.log(userDB)

})
}

module.exports.config = {

    cmdPerms: ["EMBED_LINKS"],
    usage: "", //if args is set to false you can remove this otherwise describe how to use the command
    command: "petshop",
    aliases: ["pshop"],
    cooldown: 5, //Cooldown in seconds
	args: false //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}