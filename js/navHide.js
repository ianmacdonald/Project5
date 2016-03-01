
// variables

// functions

// on click select .main-nav
$('.nav-hide').on('click', function() {
	var $toggle = $('.main-header div').toggleClass('nav-show');
	if ($('.main-nav').is(':visible')) {
		$('.main-nav').slideToggle(300, function() {
			$toggle;
		});
	} else {
		$('.main-nav').slideToggle(300, function() {
			$toggle;
			$('.main-nav').removeAttr('style');
		});

	}	
});
// if .main-nav is display: false
// hide .main-nav
// else toggle visibility of .main-nav to display: true

// slide drawer animation for hiding nav
