const fs = require('fs'); 
const db = require('quick.db')
const itemIndex = require('../json/items/items')

function invHasItem(user, itemName) {
      let userDB = db.get(user.id)
      let item = itemIndex
      for(o in item){
        if(userDB.inv.some(i => i.name == itemName)){
          return true;
        }else{
          return false;
        }
      }
    }







module.exports = {
 invHasItem

}