


global['aes_encrypt_ecbX']=aes_encrypt_ecbX
function aes_encrypt_ecbX(_paraValue, desCode) {
    if (isWinformEnv()) {
        let funExprs = "aes_encrypt_ecb " + _paraValue + " " + desCode;

        //  alert(funExprs)
        return window.external.callFun(funExprs);
    } else

        return aes_encrypt_ecb(_paraValue, desCode)
}