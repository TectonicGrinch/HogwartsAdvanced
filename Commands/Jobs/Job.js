
const { pagify } = require('../../Util/utils');

module.exports.run = async (bot, message, args) => {

    //Code Start
    let opt = args.shift().toLowerCase()
    let userDB = bot.db.get(message.author.id)

    switch(opt){
        case 'apply':
            if(userDB.job.name)
                return message.channel.send(bot.embed('You already have a job. Use **job quit** to quit your current job and join a new one.'))
            let jobName = args.join(' ').toLowerCase()
            if(!jobName)
                return message.channel.send(bot.embed('You didn\'t provide any job name.'))

            let job = bot.config.jobs.find(j => j.name == jobName)
            if(!job)
                return message.channel.send(bot.embed('No job was found under that name. Use **job list** to see all jobs.'))

            delete job.description
            userDB.job = job
            message.channel.send(bot.embed(`You work now as a ${job.name}.`))
            break;

        case 'list':
            let page = isNaN(args[0]) ? 1 : Number(args.shift())
            let jobs = pagify(bot.config.jobs, 50, page)
            message.channel.send(bot.embed(jobs.map(j => `**${j.name}** - min: $${j.min}, max: $${j.max} - ${j.description}`).join('\n')))
            break;

        case 'quit':
            userDB.job = {}
            message.channel.send(bot.embed('You quit your job.'))
            break;
    }

    bot.db.set(message.author.id, userDB)
	//Code End

}

module.exports.config = {
    cmdPerms: ["EMBED_LINKS"],
    usage: "[apply | quit | list]", //if args is set to false you can remove this otherwise describe how to use the command
    command: "job",
    cooldown: 5, //Cooldown in seconds
	args: true //If the command requires input aka if you need to write just the command name or command name with some more arguments/fields
}