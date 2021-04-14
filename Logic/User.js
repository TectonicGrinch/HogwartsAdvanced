const db = require('quick.db');

function canInteract(user1, user2, message){
let userOne = db.get(user1.location);
let userTwo = db.get(user2.location);
if(userOne == userTwo){
    return true;
}else{
    message.channel.send(`You aren't in the same location as that user.`)
}
}
module.exports = {
	canInteract
};