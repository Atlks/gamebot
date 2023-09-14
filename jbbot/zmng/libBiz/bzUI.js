
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


function loadToDataTableV2(jsonArr, tabid,columns123,order123) {
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

    $.fn.dataTable.ext.errMode = 'none';

    if (window['sxftab224'])
        window['sxftab224'].destroy();

    let dt224 = $('#' + tabid).DataTable({
        data: jsonArr,
        columns:  columns123,
        order:order123,

        language:{
            "processing": "处理中...",
            "lengthMenu": "显示 _MENU_ 项结果",
            "zeroRecords": "没有匹配结果",
            "info": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
            "infoEmpty": "显示第 0 至 0 项结果，共 0 项",
            "infoFiltered": "(由 _MAX_ 项结果过滤)",
            "infoPostFix": "",
            "search": "搜索:",
            "searchPlaceholder": "搜索...",
            "url": "",
            "emptyTable": "表中数据为空",
            "loadingRecords": "载入中...",
            "infoThousands": ",",
            "paginate": {
                "first": "首页",
                "previous": "上页",
                "next": "下页",
                "last": "末页"
            },
            "aria": {
                "paginate": {
                    "first": "首页",
                    "previous": "上页",
                    "next": "下页",
                    "last": "末页"
                },
                "sortAscending": "以升序排列此列",
                "sortDescending": "以降序排列此列"
            },
            "thousands": "."
        }
    })
    window['sxftab224'] = dt224;
    $("#loaddiv").hide();

}

function loadToDataTable(jsonArr, tabid,columns123) {
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

    $.fn.dataTable.ext.errMode = 'none';

    if (window['sxftab224'])
        window['sxftab224'].destroy();

    let dt224 = $('#' + tabid).DataTable({
        data: jsonArr,
        columns:  columns123,

        language:{
            "processing": "处理中...",
            "lengthMenu": "显示 _MENU_ 项结果",
            "zeroRecords": "没有匹配结果",
            "info": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
            "infoEmpty": "显示第 0 至 0 项结果，共 0 项",
            "infoFiltered": "(由 _MAX_ 项结果过滤)",
            "infoPostFix": "",
            "search": "搜索:",
            "searchPlaceholder": "搜索...",
            "url": "",
            "emptyTable": "表中数据为空",
            "loadingRecords": "载入中...",
            "infoThousands": ",",
            "paginate": {
                "first": "首页",
                "previous": "上页",
                "next": "下页",
                "last": "末页"
            },
            "aria": {
                "paginate": {
                    "first": "首页",
                    "previous": "上页",
                    "next": "下页",
                    "last": "末页"
                },
                "sortAscending": "以升序排列此列",
                "sortDescending": "以降序排列此列"
            },
            "thousands": "."
        }
    })
    window['sxftab224'] = dt224;
    $("#loaddiv").hide();

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


    // window["sxf_app" + tableId] = createApp({
    //
    //
    //     // exe order ,data ,crt,monted
    //     data() {
    //         console.log("------data meth")
    //         return {items: json514, msg: 123}
    //     }
    //
    //
    // });
    // window["sxf_app" + tableId].mount('#' + tableId)


}
//
// if (isset("window"))
//     window['loadToTableVue'] = loadToTableVue
//
//
// global['loadToTableVue'] = loadToTableVue

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

// function loadToTableVue(jsonArr, appID) {
//
//
//     //
//
//     //  var funname = arguments.callee.name;
//     let funname;
//     // var callerName;
//     try {
//         throw new Error();
//     } catch (e) {
//         funname = __METHOD__(e);
//
//     }
//
//
//     // arguments.callee.name
//     var arg = JSON.stringify(arguments);
//     console.log("*********=>" + funname + arg);
//
//
//     if (isset("window")) {
//         if (window["tmple_" + appID]) {
//             console.log("again enter , not need bek tmplt")
//         } else {
//             console.log("firsgt load ,bek tmplt")
//             var tmplt = $("#" + appID).html();
//             window["tmple_" + appID] = tmplt;
//         }
//
//         if (window["sxf_app" + appID]) {
//             console.log("---sxf_app destroy")
//             window["sxf_app" + appID].unmount();
//             $("#" + appID).html(window["tmple_" + appID])
//
//         }
//
//         window["sxf_app" + appID] = createApp({
//
//             data() {
//                 console.log("------data meth，appid:" + appID)
//                 return {items: jsonArr, msg: 123}
//             }
//
//         });
//         window["sxf_app" + appID].mount('#' + appID)
//     }
//
//
//     //  window["sxf_app" + tableId]=app
//
//     // setTimeout(()=>{
//     //   //  app.unmount();
//     // },500)
//
// }
