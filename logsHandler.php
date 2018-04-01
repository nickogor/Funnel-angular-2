<?php
$data = json_decode(file_get_contents("php://input"));
$filename = "logs/logs".date("m-y").".json";

$myfile = fopen($filename, "a+") or die("Unable to open file!");
$contents = filesize($filename)>0?fread($myfile, filesize($filename)):'';
var_dump(json_decode($contents));
fclose($myfile);


$myfile = fopen($filename, "w") or die("Unable to open file!");
if($contents == ''){
    $obj = "[".json_encode($data)."]";
}else{
    $obj = json_decode($contents);
    $obj[] = $data;
    $obj = json_encode($obj);
}

fwrite($myfile, $obj);
fclose($myfile);