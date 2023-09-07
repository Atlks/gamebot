async function  main(){




    await import("../lowdbx/lowdbX.js")
    let dbfile = __dirname+"/../scoreLogColl.json";


  //  pdo_exec_insert()
    let data;
    data= pdo_exec_query(dbfile)

    var _ = require('lodash');
    rzt=_.filter(data, { 'uname': "u1"  })
    console.log(rzt)
    // console.log(data)





}

// (async () => )();
main()
