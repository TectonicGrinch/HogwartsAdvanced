const fs = require('fs'); 
const db = require('quick.db')
const itemIndex = require('../json/items/items')

function invHasItem(user, itemName, message, bot) {
      let userDB = db.get(user.id)
      let item = itemIndex
      for(o in item){
        if(userDB.inv.some(i => i.name == itemName)){
          return true;
        }else{
          message.channel.send(bot.embed(`You do not have the \n**item:** ${itemName} \nor it does not exist, Use inv to see you inventory.`));
          return false;
        }
      }
    }







module.exports = {
 invHasItem

}