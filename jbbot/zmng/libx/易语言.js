
require("./core")
require("./fp_ati1990")

global['显示']=显示
function  显示(s)
{
    console.log(s)
}

global['当前时间']=当前时间
function 当前时间()
{
    return curDateTime()
}