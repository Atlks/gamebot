//console.log(errcodeMsg(71))


global['errcodeMsg']=errcodeMsg

function errcodeMsg(errcode)
{
    if (isWinformEnv())
        return window.external.callFun("errcodeMsgNodeEnv " + errcode);
    else
        return errcodeMsgNodeEnv(errcode);

}


function errcodeMsgNodeEnv(errcode) {

    //  const xlsx = require("node-xlsx");
    const xlsx = require('node-xlsx')

// excel文件类径
    try {
        excelFilePath = __dirname + '/./cfg/errcode.xlsx'
        console.log(excelFilePath)
    } catch (e) {
        console.log(e)
    }

    try {
        excelFilePath = __dirname + '/../cfg/errcode.xlsx';
        console.log(excelFilePath)
    } catch (e) {
        console.log(e)
    }

//解析excel, 获取到所有sheets
    const sheets = xlsx.parse(excelFilePath);

// 查看页面数
 //   console.log(sheets.length);

// 打印页面信息..
    const sheet = sheets[0];
// console.log(sheet);
//
// // 打印页面数据
// console.log(sheet.data);


    for (const row of sheet.data) {
        try {
            errcode_cur = row[1];
            if (errcode == errcode_cur) {
                err226 = row[2]
                return err226;
            }

            //   console.log(err);
        } catch (e) {
            console.log(e)
        }
    }




}



// 输出每行内容  foreach cant stop ,,just ex can stp
//     sheet.data.forEach(row => {
//         try {
//             errcode_cur = row[1];
//             if (errcode == errcode_cur) {
//                 err226 = row[2]
//                 return err226;
//             }
//
//             //   console.log(err);
//         } catch (e) {
//             console.log(e)
//         }
//
//         //   console.log(row);
//         // 数组格式, 根据不同的索引取数据
//     })


