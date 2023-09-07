


function  ifx(exprs,ifblkFun,ElseblkFun)
{
    if(exprs)
        ifblkFun();
    else
        ElseblkFun()

}


a=1
ifx(a>1,ifPrm=>{
    console.log("ifblk")
},b=>{
    console.log("elsexx")
})