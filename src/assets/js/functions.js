(function ($) {

	"use strict";

	/* Preload*/
	$(window).on('load', function () { // makes sure the whole site is loaded
		$('[data-loader="circle-side"]').fadeOut(); // will first fade out the loading animation
		$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('body').delay(350).css({
			'overflow': 'visible'
		});
	})
	/* Tooltip*/
	$('.tooltip-1').tooltip({
		html: true
	});

	/* Accordion*/
	function toggleChevron(e) {
		$(e.target)
			.prev('.panel-heading')
			.find("i.indicator")
			.toggleClass('icon_plus_alt2 icon_minus_alt2');
	}
	$('.panel-group').on('hidden.bs.collapse shown.bs.collapse', toggleChevron);


	/* Check and radio input styles */
	$('input.icheck').iCheck({
		checkboxClass: 'icheckbox_square-grey',
		radioClass: 'iradio_square-grey'
	});

	/* Carousel About */
	function delayOnload() {
		$(".team-carousel").owlCarousel({
			items: 1,
			loop: false,
			margin: 10,
			autoplay: false,
			smartSpeed: 300,
			responsiveClass: false,
			responsive: {
				320: {
					items: 1,
				},
				768: {
					items: 2,
				},
				1000: {
					items: 3,
				}
			}
		});
	}


	setTimeout(delayOnload, 1000);
	//$(".cd-nav-trigger"). removeAttr("href");
})(window.jQuery); // JavaScript Document

function selectRadioBox(id) {
	document.getElementById(id).checked = true;
}

