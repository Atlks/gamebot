#Region ;**** Directives created by AutoIt3Wrapper_GUI ****
#AutoIt3Wrapper_Compile_Both=y
#AutoIt3Wrapper_UseX64=y
#EndRegion ;**** Directives created by AutoIt3Wrapper_GUI ****


ConsoleWrite ( "data" )
# ConsoleWrite('@@ Debug(' & @ScriptLineNumber & ') : ConsoleWrite ( "data" ) = ' & ConsoleWrite ( "data" ) & @CRLF & '>Error code: ' & @error & @CRLF) ;### Debug Console
Run  ("electron.exe dsktp.js")
# //  ConsoleWrite('@@ Debug(' & @ScriptLineNumber & ') : Run  ("C:\\electron\\dist\\electron.exe C:\\modyfing\\jbbot\\zmng\\dsktp.js") = ' & Run  ("C:\\electron\\dist\\electron.exe C:\\modyfing\\jbbot\\zmng\\dsktp.js") & @CRLF & '>Error code: ' & @error & @CRLF) ;### Debug Console