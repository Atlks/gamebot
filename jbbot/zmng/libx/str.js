function strpos(string, find, start) {
    return string.indexOf(find, start);

}

String.prototype.startWith=function(str){
    var reg=new RegExp("^"+str);
    return reg.test(this);
}
//测试ok，直接使用str.endWith("abc")方式调用即可
String.prototype.endWith=function(str){
    var reg=new RegExp(str+"$");
    return reg.test(this);
}
global["startwith"] = startwithV2;
function startwithV2(str, wz) {
    try{
        return str.startsWith(wz);
    }catch (e)
    {
        var reg=new RegExp("^"+wz);
        return reg.test(str);
       // return str.startWith(wz);
    }


}

console.log(startwithV2("abc","ba"))

function strlen(str) {
    return str.length;
}

function strtolower(str) {
    return str.toLowerCase();
}


