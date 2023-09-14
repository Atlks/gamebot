//     xxx.htm    ../xxhtm
function includeX(headFile)
{
    if(isWinformEnv())
    {
        var hedtx=window.external.callFun("readFileSyncx __rootdir__/"+headFile);
    }
    else
    {
        var hedtx=readFileSyncx("./"+headFile)

    }

    document.write(hedtx)
}