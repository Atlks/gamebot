package main

import (
	"fmt"
	"os/exec"
)

func main() {
	fmt.Println("hello22233")
	datapath := "C:\\electron\\dist\\electron.exe   "
	fmt.Println(datapath)
	cmd := exec.Command(datapath, "C:\\modyfing\\jbbot\\zmng\\dsktp.js")
	cmd.Run()
}

// C:\Users\attil\sdk\go1.21.0\bin\go.exe run C:\Users\attil\GolandProjects\awesomeProject\starter.go
// go run xx.go
