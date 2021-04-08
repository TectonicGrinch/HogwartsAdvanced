
function reactionReactMessage(emoticons, msg){
    for(i in emoticons){
        msg.react(emoticons[i])
    }

}

function reactionCollect(emoticons, msg, message){

}


module.exports = {
    reactionReactMessage,
    reactionCollect
}