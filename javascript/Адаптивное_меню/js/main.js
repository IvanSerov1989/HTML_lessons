/* Делаем адаптивное меню на JQuery*/

$(function() {
	var menulink = $('.menu-link');
	var menu = $('menu');
	var close = $('.close-btn');
	var navlink = $('.li a');

	menulink.click(function() {
		menu.toggleClass('active-menu');
	});
	close.click(function () {
		menu.toggleClass('active-menu');
	});

	navlink.on('click', function(event) {
		event.preventDefault();
		var target = $(this).attr('href');
		var top = $(target).offset().top;
		$('html,body').animate({scrollTop: top}, 500)
	});
});