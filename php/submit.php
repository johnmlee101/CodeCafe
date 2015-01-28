<?php
error_reporting(E_ERROR | E_PARSE);
mysql_connect("localhost", "root", "") or die(mysql_error());//connect
mysql_select_db("test2") or die(mysql_error());//select db

//sanitize data --NOTE: mysql_real_escape_string must be called *AFTER* a connection is established, else it won't work
$email = mysql_real_escape_string($_POST['email']);
$check = (bool)filter_var($email, FILTER_VALIDATE_EMAIL);
$date = new DateTime();	
$date = $date->format('Y-m-d H:i:s') . "\n";
$ip = $_SERVER['REMOTE_ADDR']; 

if($check)
{
     echo(1);
     $query= "INSERT INTO `CodeCafe` (`date`,`ip`,`email`) VALUES ('$date', '$ip', '$email')";


     //run the query, plase the result into a variable
     $result= mysql_query($query) or die(mysql_error()); //run script
}
else
{
     echo(0);
}

//close the connection
mysql_close() or die(mysql_error());
/*
     workerId: workId,
     proc: 'pilot',
     lang: lang,
     gender: gender,
     age: age,
     quiet: quiet,
     device: device,
     cheat: cheat,
     comments: comments
*/
?>