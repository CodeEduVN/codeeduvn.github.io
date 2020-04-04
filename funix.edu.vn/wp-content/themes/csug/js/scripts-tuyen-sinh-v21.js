(function() {
	var header = document.querySelector('header.header');
	window.addEventListener('scroll', function(){
		if (document.documentElement.scrollTop || document.body.scrollTop || 0 > 20) {
			header.dataset.mini = true;
		} else {
			header.dataset.mini = null;
		}
	})
	var navs = document.querySelectorAll('.nav > a[href]');
	for (var i = navs.length - 1; i >= 0; i--) {
		navs[i].addEventListener('click', function() {
			for (var j = navs.length - 1; j >= 0; j--) {
				navs[j].dataset.active=null;
			}
			if (this) this.dataset.active=true;
		})
	}
})();
(function(){
	/*// benefits slider
	var bslider = document.getElementById('benefits-slider');
	var bsliderroot = bslider.parentElement;
	var itemsCount = document.querySelectorAll('#benefits-slider .-cell').length;
	var current = 0;

	var loop = null;
	var loop_delay = 20000;
	var getItemsWPerScreen = function(){
		var wrap_width = bslider.offsetWidth;
		var item_width = bslider.querySelector('.-cell').offsetWidth;
		return Math.round(wrap_width / item_width);
	}
	var getScreens = function (){
		return itemsCount - getItemsWPerScreen() + 1;
	}
	var slideTo = function(i) {
		var screens = getScreens();
		if ((0 <= i) && (i < screens)) {

			bslider.style.transform = 'translateX(-'+100/getItemsWPerScreen() * i+'%)';
			current = i;

			clearInterval(loop);
			loop = setInterval(next, loop_delay);
		}
	}
	var next = function(){
		var screens = getScreens();
		var itemTogo = (current + 1) % screens;
		
		slideTo(itemTogo);
	}
	var prev = function(){
		var screens = getScreens();
		var itemTogo = (current + screens - 1) % screens;

		slideTo(itemTogo);
	}
	bsliderroot.addEventListener('mouseover', function(){
		// console.log('enterred');
		clearInterval(loop);
	});
	bsliderroot.addEventListener('mouseleave', function(){
		// console.log('left');
		slider_loop = setInterval(next, loop_delay);
	});
	loop = setInterval(next, loop_delay);
	// window.addEventListener('scroll', function(){
	// 	if ((bslider.getBoundingClientRect().top >= 0) || 
	// 			(bslider.getBoundingClientRect().bottom >= 0)) clearInterval(loop);
	// 	else slider_loop = setInterval(next, loop_delay);
	// })

	document.querySelector('.benefits-slider__control > .control__next').onclick = next;
	document.querySelector('.benefits-slider__control > .control__prev').onclick = prev;
*/})();
(function(){
	var menu_btn = document.querySelector('.header__menu-btn');
	var sidenav = document.querySelector('aside.sidenav');
	var sidenav_links = document.querySelectorAll('aside.sidenav a.sidenav__item');
	menu_btn.onclick = function(event){
		if (sidenav.dataset.show === 'true') {
			sidenav.dataset.show = null;
		} else {
			sidenav.dataset.show = 'true';
		}
		if (event) event.stopPropagation();
	}
	document.body.addEventListener('click', function(){
		sidenav.dataset.show = null;
	});
	for (var i = sidenav_links.length - 1; i >= 0; i--) {
		sidenav_links[i].onclick = function(){
			sidenav.dataset.show = null;
		}
	}
	sidenav.onclick = function(event){
		if (event) event.stopPropagation();
	}
})();
(function() {
	var slider = document.getElementById('xtersslider');
	var slider_navitems = slider.querySelectorAll('.xtersslider__nav-item');
	var slider_xters = slider.querySelectorAll('.xtersslider__xter');
	var slider_current = 0;
	var slider_length = slider_navitems.length;
	var slider_prev = slider.getElementsByClassName('control__prev')[0];
	var slider_next = slider.getElementsByClassName('control__next')[0];
	var slider_loop = null;
	var slider_loop_delay = 10000;
	var slideTo = function (i) {
		clearInterval(slider_loop);

		for (var j = slider_xters.length - 1; j >= 0; j--) slider_xters[j].dataset.show=null;
		for (var j = this.length - 1; j >= 0; j--) 				 this[j].dataset.show=null;

		if (this[i]) this[i].dataset.show         = true;
		if (slider_xters[i]) slider_xters[i].dataset.show = true;
		slider_current = i;

		slider_loop = setInterval(slideNext, slider_loop_delay);

	}.bind(slider_navitems);
	var slideNext = function(){
		slideTo.bind(null,(slider_current+1) % slider_length) ();
	}
	var slidePrev = function(){
		slideTo.bind(null,(slider_current+slider_length-1) % slider_length) ();
	}

	for (var i = slider_navitems.length - 1; i >= 0; i--) {
		slider_navitems[i].onclick = slideTo.bind(null,i);
	}
	slider_prev.onclick = slidePrev;
	slider_next.onclick = slideNext;

	slider_loop = setInterval(slideNext, slider_loop_delay);
})();
// Jquery
$(document).ready(function(){
	// Animate scroll
	$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        var scrollTo = target.offset().top - 50;
        $('html, body').animate({
          scrollTop: scrollTo
        }, 800);
      }
    }
  });
  $('a[href="#"]').click(function () {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 800);
	});
	// End: Animate scroll
})
	