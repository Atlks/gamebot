


; C:\AutoHotKey\AutoHotkey.exe test/test.ahk
; autohotkey test/test.ahk
; "C:\Program Files\AutoHotkey\AutoHotkey.exe" test/test.ahk
bet_type := ["单", "双", "大", "小"] ;,"大单", "大双", "小单", "小双"]
command := ["余额","流水","反水","历史","上分"]
amount := 100
bet_time := 60 * 1000
idle_time := 60 * 1000
game_time := 210 * 1000
stop := false

GetAction()
{
	global amount
	r := Random(1,100)
;	if(r>50)
	{
		;amount := Random(100,2000)
		return GetType() . amount
	}
;	else
	{
		return GetCommand()
	}

}

GetCommand()
{
	global command
	index := Random(1,5)
	return command[index]
}

GetType()
{
	global bet_type
	index := Random(1,4)
	return bet_type[index]
}

RandomTime(type)
{
	return 500
;	if(type == 1)
;		return Random(5000,15000)
;	else
;		return Random(8000,30000)
}

!a::
{
	global bet_type,bet_time,game_time,stop,amount
	e_time := 0
	stop := false
	amount := 100
	Loop
	{
		if(stop)
			break
		if(e_time < bet_time)
		{
			;WinActivate "ahk_pid " 18724
			SendInput GetAction() . "{enter}"
			time := RandomTime(1)
			Sleep time
			e_time += time
			amount += 1
		}
		else if(e_time < (bet_time + idle_time))
		{
				SendInput GetAction() . "{enter}"
				time := RandomTime(2)
				Sleep time
				e_time += time
				amount += 1
		}
		else if(e_time < game_time)
		{
			Sleep 1000
			e_time += 1000
		}
		else{
			e_time := 0
			amount := 100
		}
	}
}


!s::
{
	global stop
	stop := true
}

!q::
{
	ExitApp
}

