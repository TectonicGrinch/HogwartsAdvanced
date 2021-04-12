
function reactionReactMessage(emoticons, msg){
    for(i in emoticons){
        msg.react(emoticons[i])
        return true;
    }
}

function reactionCollect(emoticons, msg){
    
    
      if(reactionReactMessage(emoticons, msg)){

        msg.awaitReactions(filter, { time: 60000, max: 1}).then(collected => {
            let ret = collected.first().emoji.name
             console.log(ret)
            return ret;
    })
    }
}



module.exports = {
    reactionReactMessage,
    reactionCollect
}