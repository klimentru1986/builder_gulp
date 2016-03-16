$(document).ready(function () {
	var cont = $('.list-item-content');

	cont.hide();

	$('.menu-list')
	
		.on('mouseenter', '.menu-list-item', function () {
			var $this = $(this);
			cont
				.stop()
				.slideUp(500);
				
			$this
				.find('.list-item-content')
					.stop(true, true)
					.slideDown(500);
		})

		.on('mouseleave', '.menu-list-item', function () {
			cont
				.stop()
					.slideUp(500);
		})
})