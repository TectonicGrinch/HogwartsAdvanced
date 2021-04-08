const db = require('quick.db');

//money checks
function hasBalance(amount, user, message) {
    let userDB = db.get(user.id);
    let price = Math.round(Number(amount));
if(price > userDB.balance){
 message.channel.send('You don\'t have enough money.')
    return false;
}else{
    return true;
 }
}

//gambling
function doubleReward(amount, user, message){
    let userDB = db.get(user.id);
    let outcome = Math.floor(Math.random(amount * 2));
    db.add(`${userDB}.balance`, outcome);
    message.channel.send(`You win double your money\n Winnings:**$${outcome}**`)
}

module.exports = {
	hasBalance,
    doubleReward
};