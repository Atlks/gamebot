


; C:\AutoHotKey\AutoHotkey.exe test/test.ahk
; autohotkey test/test.ahk
; "C:\Program Files\AutoHotkey\AutoHotkey.exe" test/test2.ahk
bet_type := ["单", "双", "大", "小"] ;,"大单", "大双", "小单", "小双"]
command := ["余额","流水","反水","历史","上分"]
amount := 20

stop := false



; getehao zosh alt+a
!a::
{

	Loop
	{
		if(stop)
			break

			;WinActivate "ahk_pid " 18724
			  SendInput a大小100{enter}

            ; slp20ms
			Sleep 100

		amount-= 1
       ; msgbox %amount%

		if ( amount<=0)
			   break


	}
}


; getehao zosh alt+s
!s::
{
	global stop
	stop := true
}

!q::
{
	ExitApp
}

