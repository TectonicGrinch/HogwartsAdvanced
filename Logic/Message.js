function reactionReactMessage(emoticons, msg) {
	for (i in emoticons) {
		msg.react(emoticons[i]);
	}
}

function reactionCollect(filter, emoticons, msg) {
	reactionReactMessage(emoticons, msg);
	console.log("waiting on reactions");
	msg.awaitReactions(filter, { time: 10000, max: 1 }).then((collected) => {
		let ret = collected.first();
		return ret;
	});
}

module.exports = {
	reactionCollect,
};
