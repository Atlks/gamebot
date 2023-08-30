<?php
 
	//var_dump($_FILES);
	
	//		//第三个参数是“true”表示能创建多级目录，iconv防止中文目录乱码

var_dump(count($_FILES));
var_dump($_FILES['file']);
	//	$res=mkdir(iconv("UTF-8", "GBK", $path),0777,true); 
	$fname=$_FILES['file']["name"] ;// - 上传文件的名称;
	$f=__DIR__.'/../'.$fname;
	// @mkdir(dirname( $f),0777,true);
//	print_r($_FILES);
//$file_frm_client=$_FILES['upfile']['tmp_name'];
//if(!$file_frm_client)
	$file_frm_client=$_FILES['file']['tmp_name'];
	move_uploaded_file($file_frm_client, $f);
	//header('location: test.php');
 	echo $fname;
//	setcookie("filex",$fname.".jpg");
// 	setcookie("file_url","uploadx/".$fname.".jpg");


//
//'name' => string 'README.md' (length=9)
//  'type' => string 'application/octet-stream' (length=24)
?>