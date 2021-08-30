$("document").ready(function () {
	//window scrolling
	$(window).scroll(function () {
		var scrolling = $(this).scrollTop();

		// back to top show & hide
		if (scrolling > 50) {
			$(".back-to-top").fadeIn();
		} else {
			$(".back-to-top").fadeOut();
		}
		//nav fix
		if (scrolling > 50) {
			$(".navbar").addClass("nav-fix");
		} else {
			$(".navbar").removeClass("nav-fix");
		}
	});

	//back to top function
	$(".back-to-top").click(function () {
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			1500
		);
	});
	// accordion js

	$(".accordion-item").on("click", function () {
		$(this).addClass("add-border").siblings().removeClass("add-border");
	});

	// countdown js
	$(".count1").countdown("2050/01/01", function (event) {
		$(this).html(event.strftime("%H"));
	});
	$(".count2").countdown("2050/01/01", function (event) {
		$(this).html(event.strftime("%M"));
	});
	$(".count3").countdown("2050/01/01", function (event) {
		$(this).html(event.strftime("%S"));
	});

	$(function () {
		$(".scroll-area").niceScroll({
			cursorcolor: "#1f004f",
			cursorborder: 0,
			background: "#000",
			cursorwidth: "10px",
			autohidemode: false,
		});
	});

	// game slick slider js
	$(".game-slider").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		arrows: false,
		dots: false,
		swipeToSlide: 0,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});
});
