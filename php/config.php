<?php 
// Ваши данные
$db_server = 'localhost'; //название сервера
$db_database = 'clients'; //название вашей базы данных
$db_user = ''; // при необходимости
$db_password = ''; // пароль если есть

// соединение с базой
$connection = mysqli_connect ($db_server, $db_database, $db_user, $db_password);
//Контроль соединения
if(!$connection) {
	die("Не удается подключится к базе данных");
}	
?>
