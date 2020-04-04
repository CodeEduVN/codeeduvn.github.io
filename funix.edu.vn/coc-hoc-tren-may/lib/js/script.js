jQuery(document).ready(function($) {
	if ($('#carouselList').length)
	{
		$('#carouselList').owlCarousel({
			loop:true,
		    dots: false,
			nav: false,
			margin: 10,
			autoplay:true,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
		    responsive:{
		        0:{
		            items:1,
		        },
		        600:{
		            items:3,
		        },
		        1000:{
		            items:3,
		        }
		    }
		});

		$(".carousel-next").click(function(event) {
			$(this).parent().next().trigger('next.owl.carousel');
		});

		$(".carousel-prev").click(function(event) {
			$(this).parent().next().trigger('prev.owl.carousel');
		});
	}

	$('body').on('click','.smooth',function(){
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});


	if ($(window).width() > 992) 
	{
		new WOW().init();
	}

});	