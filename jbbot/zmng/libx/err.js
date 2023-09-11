


function json_encodeEx(e)
{
 return    errorSeriz(e)
}
global['json_encodeEx' ]=json_encodeEx
 global['error_json_encode' ]=json_encodeEx


global['errorSeriz' ]=errorSeriz
function errorSeriz(e) {
    msg = json_encode(e)    //cuztm errobj
    if (msg.length < 5) {
        //sys error
        let eobj = {"stack": e.stack, "msg": e.message}
        msg = json_encode(eobj)
    }
    return msg;
}


global['ExChkChain' ]=ExChkChain
function  ExChkChain()
{
 let arr=arguments
    for (item of arr) {
        try{
         return    item()   //  if some ex,then ret this er let throw in another fun
        }catch (e){

        }


      //  console.log(item)
    }



}



function catchHdl(e, extype, catchFun) {

    if (typeof e === 'string') {
        if (e.startsWith(extype)) {
            catchFun();

        } else {
            throw e;
        }

    } else
        throw e;

}