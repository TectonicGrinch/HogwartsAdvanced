function reactionReactMessage(emoticons, msg) {
	for (i in emoticons) {
		msg.react(emoticons[i]);
	}
}

function reactionCollect(filter, emoticons, msg) {
	reactionReactMessage(emoticons, msg);
	console.log("waiting on reactions");
	msg.awaitReactions(filter, { time: 10000, max: 1 }).then((collected) => {
		let ret = collected.first().emoji.name;
        console.log(ret)
		return ret;
	});
}
function badWordsFilter(word, message){
	let badWord = require('../json/badWords.json');
    for(i in badWord){
		if(badWord[i] == word){
			return message.channel.send('Watch yo proffanity.')
		}else{
			 false;
		}
	}
}


module.exports = {
	reactionReactMessage,
	reactionCollect,
	badWordsFilter

};
