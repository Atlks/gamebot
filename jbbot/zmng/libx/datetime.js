


const moment = require("moment");

// 24 Hour format
//console.log(moment().format("MM/DD/YYYY HH:mm:ss"));

global['curDatetime']=curDatetime
function  curDatetime()
{
    return moment().format("MM/DD/YYYY HH:mm:ss")
}