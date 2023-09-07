import {createApp, ref} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'


console.log(72222222222)  // is execed...
// function bindJsonToTable(json514) {
//     console.log("in bind fu")
//     createApp({
//         setup() {
//             const message = ref('Hello Vue!')
//             const items = ref([json514])
//             return {
//                 items, message
//             }
//         }
//     }).mount('#app3')
// }

//window.bindJsonToTable = bindJsonToTable
//global['bindJsonToTable'] = bindJsonToTable
//window['bindJsonToTable'] = bindJsonToTable
try {
    require("./fp_ati1990");
    require("./php");
    require("./fp_ati1990.js")
} catch (e) {
}

if (isset("window"))
    window['loadToTable'] = loadToTable


function isset(varname) {
    try {
        varname = trim(varname);
        rzt = typeof (eval(varname));
        return typeof (varname) != "undefined";
    } catch (e) {
        console_log("[43isset()] " + e.message);
        //  console_log(e);
        return false;
    }

}

function loadToTableVDataTable(jsonArr, tabid) {
    // let table = new DataTable('#'+tabid);
    //  $('#'+tabid).DataTable( {
    //      data: [],
    //      columns: [
    //          { data: 'uname' },
    //          { data: '类型' },
    //          { data: 'score' },
    //          { data: 'time' }
    //      ]
    //  } );

    if (window['sxftab224'])
        window['sxftab224'].destroy();

    let dt224 = $('#' + tabid).DataTable({
        data: jsonArr,
        columns: [
            {data: 'uname'},
            {data: '类型'},
            {data: 'score'},
            {data: 'time'}
        ]
    })
    window['sxftab224'] = dt224;

}

function loadToTable(json514, tableId) {

    // if (window["tmple_" + tableId]) {
    //     console.log("again enter , not need bek tmplt")
    // } else {
    //     console.log("firsgt load ,bek tmplt")
    //     var tmplt = $("#" + tableId).html();
    //     window["tmple_" + tableId] = tmplt;
    // }
    //
    // if (window["sxf_app" + tableId]) {
    //     console.log("---sxf_app destroy")
    //     window["sxf_app" + tableId].unmount();
    //     $("#" + tableId).html(window["tmple_" + tableId])
    //
    //
    // }


    window["sxf_app" + tableId] = createApp({


        // exe order ,data ,crt,monted
        data() {
            console.log("------data meth")
            return {items: json514, msg: 123}
        }


    });
    window["sxf_app" + tableId].mount('#' + tableId)


}

if (isset("window"))
    window['loadToTableVue'] = loadToTableVue


global['loadToTableVue'] = loadToTableVue

function __METHOD__(e) {
    //Error
    //     at loadToTableVue (C:\modyfing\jbbot\zmng\node_modules\ui.js:116:17)
    //     at main (C:\modyfing\jbbot\zmng\node_modules\uiT.js:7:5)
    let arr = e.stack.split("\n")
    // var re = /(\w+)@|at (\w+) \(/g, st = e.stack, m;
    // re.exec(st), m = re.exec(st);
    // callerName = m[1] || m[2];
    let funname = arr[1]
    funname = funname.trim();
    let brk = funname.indexOf("(")
    funname = funname.substr(3, brk - 3)
    return funname.trim();
}

function loadToTableVue(jsonArr, appID) {


    //

    //  var funname = arguments.callee.name;
    let funname;
    // var callerName;
    try {
        throw new Error();
    } catch (e) {
        funname = __METHOD__(e);

    }


    // arguments.callee.name
    var arg = JSON.stringify(arguments);
    console.log("*********=>" + funname + arg);


    if (isset("window")) {
        if (window["tmple_" + appID]) {
            console.log("again enter , not need bek tmplt")
        } else {
            console.log("firsgt load ,bek tmplt")
            var tmplt = $("#" + appID).html();
            window["tmple_" + appID] = tmplt;
        }

        if (window["sxf_app" + appID]) {
            console.log("---sxf_app destroy")
            window["sxf_app" + appID].unmount();
            $("#" + appID).html(window["tmple_" + appID])

        }

        window["sxf_app" + appID] = createApp({

            data() {
                console.log("------data meth，appid:" + appID)
                return {items: jsonArr, msg: 123}
            }

        });
        window["sxf_app" + appID].mount('#' + appID)
    }


    //  window["sxf_app" + tableId]=app

    // setTimeout(()=>{
    //   //  app.unmount();
    // },500)

}
