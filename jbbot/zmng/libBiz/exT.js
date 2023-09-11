function exHdlrProcs(e) {

    if( typeof e === 'string' )
    {
        if(e.startsWith("not_loginex"))
            console.log( e.split("@")[1])
        else
            throw e;
    }
    
}

try{
    throw "not_loginex@没有agtid,需要登录"
}catch (e){

exHdlrProcs(e)
    console.log(11)

}
