const db = require('quick.db')

function hasJob(user, requiredJob){
    let userDB = db.get(user.id)
    if(userDB.job.hasOwnProperty('name') || (requiredJob && userDB.job.name != requiredJob)){

       return true;
    }else{
        return false;
    }
}


        module.exports = {
            hasJob
           
           }