


function pdo_exec_query(qryDsl, dbfile) {
    //  alert("上分成功")
    // await import("../lowdbx/lowdbX.js")

    //   console.log("ini_db_conn=>"+global["ini_db_conn"])
    return pdo_query(qryDsl, dbfile);
}

function pdo_insert(rcd, dbfile) {


    let arg = JSON.stringify(arguments);
    let  ivkFundbg = "******[pdo_insert]"   + arg
    console.log(ivkFundbg);
    log_info(ivkFundbg)

    //   require("secury")
    let a = [];
    a.push(rcd);
    a.push(dbfile)
    return   call_funcNoEx("pdo_insert_core", a)

}