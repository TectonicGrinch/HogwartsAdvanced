const fs = require('fs'); 
const db = require('quick.db')
const itemIndex = require('../json/items/items.json')

function invHasItem(user, itemName) {
      let userDB = db.get(user.id)
      let item = itemIndex.allitems[itemName]
 if(!item || !userDB.inv.some(i => i.name == itemName)){
  return false;
  
}else{
  return true;

}}







module.exports = {
 invHasItem

}