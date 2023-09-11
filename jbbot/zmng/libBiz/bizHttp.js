



function  bzGet($url, f){
    jqGet($url, f ,failF);
}

window['jqFailFun']=jqFailFun
function jqFailFun(jqXHR, textStatus, errorThrown) {

    $("#loaddiv").hide();
    let arg = JSON.stringify(arguments);
    log_err(arg)


    //if( jqXHR?. responseJSON?.errors )
    //for 兼容。net webbrtower edge  ie11 ,not spt nullsafe sync
    if(jqXHR && jqXHR.responseJSON &&  jqXHR.responseJSON.errors)
    {
        alert("参数错误 检查代理id "+   JSON.stringify(  jqXHR. responseJSON.errors));
        return;
    }

    if(jqXHR.status==403)
    {
        alert("错误 检查ip加白处理 "+ jqXHR.responseText);return;
    }




}