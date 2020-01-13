<?php
date_default_timezone_set('Europe/Tallinn');

$fname='Ivan';
$sname='Sierov';
$course='SKTVRp19';
?>

<html>
	<head>
		<meta charset="utf-8">
		<title>Мой первый php</title>
	</head>
	<body>
	<h1>Мой первый php</h1>
<p>
<?php
echo 'Имя - '.$fname. '; Фамииля - '.$sname. '; Группа - '.$course.'<br>';
echo date ('d.m.Y G:i:s' , time());
?>
</p>
<?php 
	function hello($name = 'Гость' ){
		return "Hello $name";
	}
	echo hello();
?>

<p>
</p>
</body>
</html>