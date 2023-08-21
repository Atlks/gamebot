
var request = require('sync-request');

const querystring = require('querystring')

//url = "http://localhost/public/web/w.php";



//
// var res = request('post', url, {
//
//     headers: {
//         'content-type': 'application/x-www-form-urlencoded'
//     },
//
//     body: 'reqid=112111111&txt=ttttt'
//
//
// });
//
// console.log(res.getBody().toString());



//throw 11;

function main() {

   //-----------------------------------ret rq
    url = "http://localhost/public/web/r.php";

    const querystring = require('querystring')

    console.log(Date.now())

    console.log(url);
    var res = request('GET', url);
    let body = res.getBody();
    console.log(body.toString());

    jsonarr = JSON.parse(body.toString());


    for (var i in jsonarr) {
        let jsonarrElement = jsonarr[i];
        if (jsonarrElement.reqid == "." || jsonarrElement.reqid == "..")
            continue;
        // aa.php?

        qeryOBj = querystring.parse(""+jsonarrElement.QUERY_STRING);


        if (qeryOBj.path == "pathssss") {

        }

        //----------------send repos

        url = "http://localhost/public/web/w.php";
        console.log(url)
        postbody='reqid='+jsonarrElement.reqid+'&txt='+qeryOBj.path
        console.log("postbody==>"+ postbody);

        var res = request('POST', url, {

            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            },

            body: postbody


        });
        console.log(res.getBody().toString());


    }

  setTimeout(main, 50)


}



setTimeout(main, 50)


//var user = JSON.parse(res.getBody('utf8'));