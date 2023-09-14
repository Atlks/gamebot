var __检查通过 = false


require("./系统.js")
function 登录(用户名, 密码) {

    检查用户名密码(用户名, 密码);
    如果(__检查通过,
        那么(() => {
            保存TOKEN()
            显示退出按钮区域()
            关闭登录区域()
            转到主界面();

        }), 否则(() => {
            提示("用户名密码不对")
            终止流程()

        }))

}

登录("aaa",123)

function  保存TOKEN()
{

}

function  显示退出按钮区域(){

}
function 终止流程() {

}

function 提示(提示信息) {
    console.log(提示信息)
}

function 转到主界面() {
    console.log("welcome")
}

function 关闭登录区域() {
}

Function
显示退出按钮区域()
{
}

function 那么(通过后执行的指令) {
    return  通过后执行的指令
}

function 否则(拒绝后执行的指令) {
   return  拒绝后执行的指令
}




function 检查用户名密码(用户名, 密码) {
    __检查通过=true; __检查通过=false;
   // console.log(111)

}

function 如果(条件, 通过后执行的指令, 拒绝后执行的指令) {
    if(条件)
    {
        通过后执行的指令()
    }else
        拒绝后执行的指令()
}