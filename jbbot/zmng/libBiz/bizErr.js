global['errcodeMsgV2'] = errcodeMsgV2
global['errcodeMsg'] = errcodeMsgV2
function errcodeMsgV2(errcode) {
    if (isWinformEnv())
        return window.external.callFun("errcodeMsgNodeEnv " + errcode);
    else
        return errcodeMsgNodeEnv(errcode);

}

global['errcodeMsgNodeEnv'] = errcodeMsgNodeEnv
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

    for (var i = 0; i < sheet.data.length; i++) {

        // for (const row of sheet.data) {
        try {
            let row = sheet.data[i];
            let errcode_cur = row[1];
            if (errcode == errcode_cur) {
                let err226 = row[2]
                return err226;
            }

            //   console.log(err);
        } catch (e) {
            console.log(e)
        }
    }


}
