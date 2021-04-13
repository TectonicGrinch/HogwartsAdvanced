const fs = require('fs'); 

function getFilesRecursive(path, ignoreDir){
    let files = [];
    let dir = fs.readdirSync(path, {withFileTypes: true});
    dir.forEach(file => {
        if(file.isDirectory()){
            if(ignoreDir && ignoreDir.includes(file.name))
                return;
            files = files.concat(getFilesRecursive(`${path}/${file.name}`));    
            return;
        }
        files.push(`${path}/${file.name}`);
    });
    return files;
}

function formatTime(ms){
    let {d, h, m, s} = convertMiliseconds(ms);
    let timeStr = '';

    if(d){
        timeStr += `${d}days `;
        if(h)
            timeStr += `${h}h `;
        if(m)
            timeStr += `${m}m `;
        if(s)
            timeStr += `${s}s`
    }else{
        if(h)
            if(m || s)
                timeStr += `${h}:`;
            else
                timeStr += `${h}hours`;

        m = m.toString().length == 1 ? `0${m}` : m;
        s = s.toString().length == 1 ? `0${s}` : s;

        if(m || s)
            timeStr += `${m}:${s}`;
    }
    return timeStr;
}

function convertMiliseconds(miliseconds, format) {
    let days, hours, minutes, seconds, total_hours, total_minutes, total_seconds;
    
    total_seconds = parseInt(Math.floor(miliseconds / 1000));
    total_minutes = parseInt(Math.floor(total_seconds / 60));
    total_hours = parseInt(Math.floor(total_minutes / 60));
    days = parseInt(Math.floor(total_hours / 24));
  
    seconds = parseInt(total_seconds % 60);
    minutes = parseInt(total_minutes % 60);
    hours = parseInt(total_hours % 24);
    
    switch(format) {
      case 's':
          return total_seconds;
      case 'm':
          return total_minutes;
      case 'h':
          return total_hours;
      case 'd':
          return days;
      default:
          return { d: days, h:  hours, m: minutes, s: seconds };
    }
}

function pagify(array, size, page){
    page = isNaN(page) || page <= 0 ? 1 : page;
    if(page > Math.ceil(array.length / size))
        page = Math.ceil(array.length / size)

    array = array.slice((page - 1) * size, page * size)
    return array;
}
function rolecheck(role){
   
    let ret = (msg.guild.member.roles.cache.find(r => r.name === role))
     return ret; 
}

function dynamicgenerator(name){
  
    let rand = Math.floor(Math.random() * name.length);
    let ret = name[rand]
     return ret;

}
function randomRoll(numOne, numTwo){
 let ret = Math.floor(Math.random() * (numOne, numTwo));

 return ret;


}
function rand(items) {
    // "~~" for a closest "int"
    return items[~~(items.length * Math.random())];
}
function randomName(firstNameArray, lastNameArray){
    let firstN = Math.floor(Math.random() * firstNameArray.length);
    let lastN = Math.floor(Math.random() * lastNameArray.length);
    let ret = firstNameArray[firstN].concat(` ${lastNameArray[lastN]}`)
    console.log(`Random Name: ${ret}`)
    return ret;
}

module.exports = {
    getFilesRecursive,
    formatTime,
    convertMiliseconds,
    pagify,
    rolecheck,
    dynamicgenerator,
    randomRoll,
    rand,
    randomName
}