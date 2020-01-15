/* Взаимодействие с элементами по атрибутам */

$('a[download]').css('border', '1px solid red'); // Простой атрибут
$('a[href="https://ya.ru/"]').css('border', '1px solid red'); // Полное соответсвие
$('a[href!="https://ya.ru/"]').css('border', '1px solid red');  // Полное несоответсвие
$('a[href^="http"]').css('border', '1px solid red');// Начинается с ...
$('a[href$=".com"]').css('border', '1px solid red'); // Заканчивается на ...
$('a[href*="google"]').css('border', '1px solid red'); // Содержит ...
$('a[data-target|="main"]').css('border', '1px solid red'); // Имеет префикс ...
$('a[href][download]').css('border', '1px solid red'); // Имеет одновременно несколько атрибутов