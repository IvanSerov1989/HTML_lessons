/* ====== Базовые события ===== */

 $('ul li').click(function(event) {
 	console.log('Ты нажал на элемент');
 	$('li').append('<li>Дополнительный элемент</li>');
 })   //click()

function addAndStop(e) {
	$('ul').append('<li>Дополнительный элемент</li>');
	$('ul').off('click');
}

$('ul').on('click', 'li', addAndStop);