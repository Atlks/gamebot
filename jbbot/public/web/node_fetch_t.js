//const {default: fetch} = require("node-fetch");


async  function  main()
{
    require("esm-hook");
    const fetch = require('node-fetch').default



//fetch("http://127.0.0.1:80/web/upload.php")


    const res = await fetch('http://google.com');
    const result = await res.text();

    console.log(result)
}


main()
