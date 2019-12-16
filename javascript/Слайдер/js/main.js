$(function () {
	var slideNow = 1;
	var slideCount = $('.sliderwprapper').children().length;
	var slideTime = 5000;
	var navBtn = $('.slide-nav');

	navBtn.click(function() {
		navBtn = $(this).index();
		$('.active').removeClass('active');
		$(this).toggleClass('active');
		if (navBtn + 1 != slideNow) {
			var translateWidth = -$('.view')
		}
	})
})