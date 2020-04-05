jQuery(document).ready(function($) {

	function round(value, decimals) {
	    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
	}

	$(window).load(function() {
		setTimeout(
			function(){ 
				$('#loader').fadeOut('slow');
			}, 2500
		);
	});

	if ($(window).width() > 992) 
	{
		new WOW().init();

		var timeLineToTop = parseInt($('.timeline').offset().top) - 350;

		var navToTop = parseInt($('.main-navigation').offset().top) + 50;
		var lastScroll = 0;

		$(window).scroll(function() {
			var st = parseInt($(this).scrollTop());
			if (st >= navToTop) {
				$('.main-navigation').addClass('fixed-top-menu');
			}else {
				$('.main-navigation').removeClass('fixed-top-menu');
			}

			if (st >= timeLineToTop) {
				var timeLineHeight = parseInt($('.timeline').height());
				var x = parseInt(st - timeLineToTop);
				if (x <= 1866)
				{
					$('.color-timeline').css('height', x);

					if (x >= (311/2)) {
						$('.dotSign:first').css('background', '#fd6610');
					} else {
						$('.dotSign:first').css('background', '#222');
					}

					if (x >= (311/2) + 311) {
						$('.dotSign:eq(1)').css('background', '#fd6610');
					} else {
						$('.dotSign:eq(1)').css('background', '#222');
					}

					if (x >= (311/2) + 311*2) {
						$('.dotSign:eq(2)').css('background', '#fd6610');
					} else {
						$('.dotSign:eq(2)').css('background', '#222');
					}

					if (x >= (311/2) + 311*3) {
						$('.dotSign:eq(3)').css('background', '#fd6610');
					} else {
						$('.dotSign:eq(3)').css('background', '#222');
					}

					if (x >= (311/2) + 311*4) {
						$('.dotSign:eq(4)').css('background', '#fd6610');
					} else {
						$('.dotSign:eq(4)').css('background', '#222');
					}

					if (x >= (311/2) + 311*5) {
						$('.dotSign:eq(5)').css('background', '#fd6610');
					} else {
						$('.dotSign:eq(5)').css('background', '#222');
					}

					
				}
			}

			lastScroll = st;
		});

	}
	
	$('body').on('click','.toRegister',function(){
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

	if ($(window).width() <= 992)
	{
		$('body').on('click','.toggleForm',function(){
			$('.form-group').show(400);
			$('#registerForm button[type="submit"]').css('display', 'block');;
			$('.toggleForm').hide();
		});

	}

});