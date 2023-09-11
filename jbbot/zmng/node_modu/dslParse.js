require("fp_ati1990")


require("file");
require("core")


arrStmtLines = readlines__stmts("../dslV3.sql")
cmprRztStack = [];
whileRztStack=[]

funArgsStack = [];
funRetAddStack=[]
echo(99999999999999999)
linenum_curExec = 0;


function readlines__stmts(f) {
    let arrStmtLines = file_readLines(f);
    arrStmtLines = array_filter(arrStmtLines);

    let a_fnly = [];
    for (let longStmt of arrStmtLines) {
        atmp = longStmt.split(",");
        atmp = array_filter(atmp);
        a_fnly = a_fnly.concat(atmp);
    }

    a_fnly = array_filter(a_fnly);
    return a_fnly;
}


rzt = startwith("lab1:", "lab1:")

main()

function callStmtPrcs(a71554Element) {

    let a = a71554Element;
    a = array_filter(a)
    let stmt = a[0]
    let fun = a[1];
    // let lab=a[1];
 let   linenum_curExecTmp = searchLabLine(fun)
    if(linenum_curExecTmp<0) //cant find
    {
        //cant find ,so just a sys fun
        __funArgs = a.slice(2)
     __retVal=  call_func(fun,__funArgs)
        return;

    }

    //udf call


    __funArgs = a.slice(2)
    funArgsStack.push(a.slice(2))


    __retNextExecLinenum = linenum_curExec + 1;
    funRetAddStack.push(__retNextExecLinenum)

    //goto fun to exec

    linenum_curExec=linenum_curExecTmp;
    linenum_curExec++
    //  main();

}

function retStmtPrcs(stmtTkArr) {

    exprs = stmtTkArr[1]
    rzt = eval(exprs);
    __retVal = rzt
    linenum_curExec =  funRetAddStack.pop()

}

function ingorFunbodyStmt(curStmtTokenArr, curStmt) {

    curStmt = curStmt.trim();

    endfunLine = searchEndfunLine(linenum_curExec)
    linenum_curExec = endfunLine;

}

function WhileStmtPrcs(curStmtTokenArr, curStmt) {

    exprs =curStmt.substr  (  6 )
    rzt = eval(exprs)
    // var cmprRztStack=[];
    cmprRztStack.push(rzt);whileRztStack.push(rzt)
    if (rzt) {
        linenum_curExec++
    } else {
        linenum_curExec = searchCmdLine("endwhile",linenum_curExec)
        echo("while codt is fales,goto after endwhile")
        linenum_curExec++;
    }

}

function searchCmdLineBack(while1, linenum_curExec) {

    linenum=linenum_curExec
    while (linenum >0) {
        let line = arrStmtLines[linenum]

        if (line.startsWith(while1))
            return linenum;
        linenum--;
    }
    return 0;
}

function EndWhileStmt(curStmtTokenArr, curStmt) {

     //   echo("cmdRzt is true, need foreach again ");
        linenum_curExec = searchCmdLineBack("while", linenum_curExec)



}

function main() {
    while (true) {
        curStmt = arrStmtLines[linenum_curExec];
        curStmt = trim(curStmt)
        echo("curLinenum:" + linenum_curExec + "  " + "curstmt=>" + curStmt)
        let curStmtTokenArr = split(curStmt, " ");
        curStmtTokenArr = array_filter(curStmtTokenArr)
        let cmd1216 = curStmtTokenArr[0]
        if (cmd1216 == "set" || cmd1216 == "let") {
            parseSetStmt(curStmtTokenArr, curStmt);

        }  else if (cmd1216 == "while") {
            WhileStmtPrcs(curStmtTokenArr, curStmt);
            continue;
        } else if (cmd1216 == "endwhile") {
            EndWhileStmt(curStmtTokenArr, curStmt);
            continue;
        }

        else if (cmd1216 == "echo") {
            parseEchoStmt(curStmtTokenArr, curStmt);
        } else if (cmd1216 == "exit") {
            break;
        } else if (cmd1216 == "goto") {
            parseGotoStmt(curStmt);
            continue;
        } else if (cmd1216 == "if") {
            parseIfStmt(curStmtTokenArr, curStmt);
            continue;
        } else if (cmd1216 == "else") {
            parseElseStmt(curStmtTokenArr, curStmt);
            continue;
        } else if (cmd1216 == "endif") {


        } else if (cmd1216 == "call") {
            callStmtPrcs(curStmtTokenArr,curStmt);
            continue;
        } else if (cmd1216 == "return" || cmd1216 == "ret") {
            retStmtPrcs(curStmtTokenArr);

            continue;
        } else if (cmd1216.endsWith(":")) {//fun def ,or lab
            //忽略函数体
            ingorFunbodyStmt(curStmtTokenArr, curStmt);

            continue;
        } else if (cmd1216 == ("endfun")) {//fun def ,or lab

        } else
        {
            try{
                eval(curStmt)
            }catch (e)
            {
             let   stmt="call "+curStmt;
             let  curStmtTokenArr=stmt.split(" ");
                curStmtTokenArr=array_filter(curStmtTokenArr)
                callStmtPrcs(curStmtTokenArr,stmt);
            }
        }



        linenum_curExec++;

    }

}


//echo(a)

function parseSetStmt(stmtPrm, curStmt) {
    //a = stmtPrm;

    exprs = curStmt.substr(4)
    //  global['varsLst533_' + varab] = v;
    let stmt = '' + exprs;
    eval(stmt)

}

function parseEchoStmt(stmtPrm, curStmt) {


    let exprs = curStmt.substr(5)
    echo(eval(exprs))
}


function elseBlkLine(linenum) {
    linenum++;
    while (linenum < arrStmtLines.length) {
        let line = arrStmtLines[linenum]
        if (line.startsWith("else"))
            return linenum;
        linenum++;
    }


}


function parseIfStmt(stmtTokenArr, line) {
    // let a = split(line, " ");
    // let stmt = a[0]
    exprs = substr(line, 3, 100)
    rzt = eval(exprs)
    // var cmprRztStack=[];
    cmprRztStack.push(rzt)
    if (rzt) {
        linenum_curExec++
    } else {
        linenum_curExec = elseBlkLine(linenum_curExec)
    }
}

function searchCmdLine(cmdStartwz, linenum) {
    // let cmdStartwz = "else";
    // linenum++;
    while (linenum < arrStmtLines.length) {
        let line = arrStmtLines[linenum]

        if (line.startsWith(cmdStartwz))
            return linenum;
        linenum++;
    }

}

function parseElseStmt(curStmtTkArr, curStmt) {

    let cmpRzt = cmprRztStack.pop()
    if (cmpRzt) {
        echo("cmdRzt is true,skip elese blk");
        linenum_curExec = searchCmdLine("endif", linenum_curExec)
        return
    }

    let exprs = curStmt.substr(5);
    parseSetStmt(null, exprs);
    linenum_curExec++;

}

function parseEndifStmt(aElement) {

}

function parseGotoStmt(line) {
    let a = split(line, " ");
    a = array_filter(a)
    let stmt = a[0]
    let lab = a[1];


    linenum_curExec = searchLabLine(lab)
    linenum_curExec++
    //  main();


}

function searchEndfunLine(startLinenum) {
    let linenum121 = 0;


    for (let line of arrStmtLines) {
        if (linenum121 < startLinenum) {
            linenum121++;
            continue;
        }

        line = trim(line)

        if (linenum121 == 10)
            echo(11)
        if (startwith(line, "endfun"))
            return linenum121;

        linenum121++;
    }
}

function searchLabLine(lab) {
    let linenum121 = 0;


    for (let line of arrStmtLines) {

        line = trim(line)

        if (linenum121 == 10)
            echo(11)
        if (startwith(line, lab + ":"))
            return linenum121;

        linenum121++;
    }

    return  -1

    // echo(line)


}

// foreach( a,(itm)=>{
//      echo(itm)
//
//    // echo(a)
// })