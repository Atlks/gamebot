const xlsx = require('node-xlsx')

// excel文件类径
const excelFilePath = './cfg/errcode.xlsx'

//解析excel, 获取到所有sheets
const sheets = xlsx.parse(excelFilePath);

// 查看页面数
console.log(sheets.length);

// 打印页面信息..
const sheet = sheets[0];
// console.log(sheet);
//
// // 打印页面数据
// console.log(sheet.data);

// 输出每行内容
sheet.data.forEach(row => {
    try{
        errcode=row[1];
        err=row[2]
        console.log(err);
    }catch (e)
    {
        console.log(e)
    }

 //   console.log(row);
    // 数组格式, 根据不同的索引取数据
})

