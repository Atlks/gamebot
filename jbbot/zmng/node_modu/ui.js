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
window['loadToTable'] = loadToTable

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

    if (window["tmple_" + tableId]) {
        console.log("again enter , not need bek tmplt")
    } else {
        console.log("firsgt load ,bek tmplt")
        var tmplt = $("#" + tableId).html();
        window["tmple_" + tableId] = tmplt;
    }

    if (window["sxf_app" + tableId]) {
        console.log("---sxf_app destroy")
        window["sxf_app" + tableId].unmount();
        $("#" + tableId).html(window["tmple_" + tableId])


    }
    window["sxf_app" + tableId] = createApp({


        // exe order ,data ,crt,monted
        data() {
            console.log("------data meth")
            return {items: json514, msg: 123}
        }


    });
    window["sxf_app" + tableId].mount('#' + tableId)


}


window['loadToTableVue'] = loadToTableVue
function loadToTableVue(json514, tableId) {

    if (window["tmple_" + tableId]) {
        console.log("again enter , not need bek tmplt")
    } else {
        console.log("firsgt load ,bek tmplt")
        var tmplt = $("#" + tableId).html();
        window["tmple_" + tableId] = tmplt;
    }

    if (window["sxf_app" + tableId]) {
        console.log("---sxf_app destroy")
         window["sxf_app" + tableId].unmount();
        $("#" + tableId).html(window["tmple_" + tableId])

    }
   let app = createApp({


        // exe order ,data ,crt,monted
        data() {
            console.log("------data meth")
            return {items: json514, msg: 123}
        }


    });
   app.mount('#' + tableId)
    window["sxf_app" + tableId]=app

    setTimeout(()=>{
      //  app.unmount();
    },50)

}
