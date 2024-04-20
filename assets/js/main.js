/* ==========================================================================

   Table of content:

   1. Custom mouse cursor
   2. Animsition preloader
   3. Swiper slider
   4. Isotope filter
   5. Scroll animations
   6. Navigation open/close
   7. Drop-down menu
   8. Midnight header
   9. Footer hover effect
   10. Magnific popup
   11. Touch, no touch
   12. Scroll to id
   13. Progress bar
   14. Accordion
   15. Headroom
   16. Scroll btn hide on scroll
   17. Parallax background
   18. Contact form

   ========================================================================== */





$(function() {
	"use strict";

	/* 1. Custom mouse cursor */
/*
Copyright (c) 2020 by UXBox (https://codepen.io/uxbox/pen/RwPwemz)
Fork of an original work Hover slider (https://codepen.io/ig_design/pen/ZVQLmR

Permission is hereby granted, free of charge, to any person obtaining a copy of 
this software and associated documentation files (the "Software"), to deal in 
the Software without restriction, including without limitation the rights to 
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies 
of the Software, and to permit persons to whom the Software is furnished to do 
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all 
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
SOFTWARE.
*/
	document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
		e.style.left = n.clientX + "px",
		e.style.top = n.clientY + "px"
	});
	var
		e = document.getElementById("js-pointer");

	$(document).mousemove(function(e) {

		$(".js-pointer-black")
		.on("mouseenter", function() {
			$('.js-pointer').addClass("js-black")
		})
		.on("mouseleave", function() {
			$('.js-pointer').removeClass("js-black")
		})

		$(".js-pointer-large, .swiper-button-next, .swiper-button-prev, .mfp-arrow-left, .mfp-arrow-right")
		.on("mouseenter", function() {
			$('.js-pointer').addClass("js-large")
		})
		.on("mouseleave", function() {
			$('.js-pointer').removeClass("js-large")
		})

		$(".js-pointer-small, .swiper-pagination-bullet")
		.on("mouseenter", function() {
			$('.js-pointer').addClass("js-small")
		})
		.on("mouseleave", function() {
			$('.js-pointer').removeClass("js-small")
		})

		$(".js-pointer-right, .mfp-img")
		.on("mouseenter", function() {
			$('.js-pointer').addClass("js-right")
		})
		.on("mouseleave", function() {
			$('.js-pointer').removeClass("js-right")
		})

		$(".js-pointer-zoom")
		.on("mouseenter", function() {
			$('.js-pointer').addClass("js-zoom")
		})
		.on("mouseleave", function() {
			$('.js-pointer').removeClass("js-zoom")
		})

		$(".js-pointer-open")
		.on("mouseenter", function() {
			$('.js-pointer').addClass("js-open")
		})
		.on("mouseleave", function() {
			$('.js-pointer').removeClass("js-open")
		})

		$(".js-pointer-none")
		.on("mouseenter", function() {
			$('.js-pointer').addClass("js-none")
		})
		.on("mouseleave", function() {
			$('.js-pointer').removeClass("js-none")
		})

	});

	$(document).ready(function() {

		/* 2. Animsition preloader */
		$(".js-animsition-overlay").animsition({
			inClass: 'overlay-slide-in-right',
			outClass: 'overlay-slide-out-right',
			inDuration: 1,
			outDuration: 1500,
			linkElement: '.js-animsition-link',
			// e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
			loading: false,
			loadingParentElement: 'body', //animsition wrapper element
			loadingClass: 'animsition-loading',
			loadingInner: '', // e.g '<img src="loading.svg" />'
			timeout: false,
			timeoutCountdown: 5000,
			onLoadEvent: true,
			browser: [ 'animation-duration', '-webkit-animation-duration'],
			// "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
			// The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
			overlay : true,
			overlayClass : 'js-animsition-overlay-slide',
			overlayParentElement : 'body',
			transition: function(url){ window.location.href = url; }
		});

		$('body').on('animsition.outStart', function() {
			$('body').removeClass('js-page-in-out');
			$('body').addClass('js-page-out');
		})

		$('body').on('animsition.inEnd', function() {
			$('body').addClass('js-page-in-out');
			$('body').addClass('js-page-in');
			setTimeout(function () {
				$("body").addClass("js-page-in-anim-active");
			}, 1200);

			/* 3. Swiper slider */
			var interleaveOffset = 0.5;

			var homeSwiper = new Swiper ('.js-home-slider', {
				speed: 1300,
				autoHeight: true,
				autoplay: {
					delay: 5000
				},
				watchSlidesProgress: true,
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				},

/*
Copyright (c) 2020 by digistate (https://codepen.io/digistate/pen/aEqzBB)

Permission is hereby granted, free of charge, to any person obtaining a copy of 
this software and associated documentation files (the "Software"), to deal in 
the Software without restriction, including without limitation the rights to 
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies 
of the Software, and to permit persons to whom the Software is furnished to do 
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all 
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
SOFTWARE.
*/
				on: {
					progress: function() {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							var slideProgress = swiper.slides[i].progress;
							var innerOffset = swiper.width * interleaveOffset;
							var innerTranslate = slideProgress * innerOffset;
							swiper.slides[i].querySelector(".js-parallax-slide-bg").style.transform =
							"translate3d(" + innerTranslate + "px, 0, 0)";
						}
					},
					touchStart: function() {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							swiper.slides[i].style.transition = "";
						}
					},
					setTransition: function(speed) {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							swiper.slides[i].style.transition = speed + "ms";
							swiper.slides[i].querySelector(".js-parallax-slide-bg").style.transition =
							speed + "ms";
						}
					}
				}
			});

			var navSwiperBg = new Swiper ('.js-nav-slider-bg', {
				speed: 1000,
				effect: 'fade'
			});

			var navSwiper = new Swiper ('.js-nav-slider', {
				speed: 1000,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					dynamicBullets: true
				},
				thumbs: {
					swiper: navSwiperBg
				}
			});

			var parallaxVerticalSwiper = new Swiper(".js-parallax-slider", {
				direction: "vertical",
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					dynamicBullets: true
				},
				speed: 1300,
				parallax: true,
				mousewheel: {
					sensitivity: 1
				}
			});

			var parallaxVerticalSwiper2Bg = new Swiper(".js-parallax-slider-2-bg", {
				direction: "vertical",
				speed: 1300,
				parallax: true
			});

			var parallaxVerticalSwiper2 = new Swiper ('.js-parallax-slider-2', {
				direction: "vertical",
				speed: 1300,
				mousewheel: {
					sensitivity: 1
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					dynamicBullets: true
				},
				thumbs: {
					swiper: parallaxVerticalSwiper2Bg
				}
			});

			var freemodeVerticalSwiper = new Swiper(".js-freemode-slider", {
				direction: "vertical",
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					dynamicBullets: true
				},
				speed: 1300,
				parallax: true,
				spaceBetween: 120,
				breakpoints: {
					999: {
						spaceBetween: 90
					},
					767: {
						spaceBetween: 60
					}
				},
				freeMode: true,
				mousewheel: {
					sensitivity: 1
				}
			});

			var columnsSwiper = new Swiper ('.js-columns-slider', {
				spaceBetween: 120,
				slidesPerView: 'auto',
				loop: true,
				breakpoints: {
					999: {
						spaceBetween: 90
					},
					767: {
						spaceBetween: 60
					}
				},
				speed: 1300,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					dynamicBullets: true
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				},
				mousewheel: {
					sensitivity: 1
				},
				freeMode: true
			});

			var columnsParallaxSwiper = new Swiper ('.js-columns-parallax-slider', {
				spaceBetween: 120,
				slidesPerView: 'auto',
				loop: true,
				breakpoints: {
					999: {
						spaceBetween: 90
					},
					767: {
						spaceBetween: 60
					}
				},
				speed: 1300,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					dynamicBullets: true
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				},
				mousewheel: {
					sensitivity: 1
				},
				parallax: true,
				freeMode: true
			});

			var fadeVerticalSwiperBg = new Swiper(".js-fade-slider-bg", {
				direction: "vertical",
				speed: 1000,
				effect: 'fade'
			});

			var fadeVerticalSwiper = new Swiper ('.js-fade-slider', {
				direction: "vertical",
				speed: 1000,
				mousewheel: {
					sensitivity: 1
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					dynamicBullets: true
				},
				thumbs: {
					swiper: fadeVerticalSwiperBg
				}
			});

			var fadeSwiperBg = new Swiper(".js-fade-horizontal-slider-bg", {
				speed: 1000,
				effect: 'fade'
			});

			var fadeSwiper = new Swiper ('.js-fade-horizontal-slider', {
				speed: 1000,
				mousewheel: {
					sensitivity: 1
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					dynamicBullets: true
				},
				thumbs: {
					swiper: fadeSwiperBg
				}
			});

			var view3Swiper = new Swiper ('.js-3-view-slider', {
				slidesPerView: 1,
				centeredSlides: true,
				speed: 1400,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					dynamicBullets: true
				},
				breakpoints: {
					768: {
						slidesPerView: 2
					},
					1000: {
						slidesPerView: 3
					}
				}
			});

			var view2Swiper = new Swiper ('.js-2-view-slider', {
				slidesPerView: 1,
				centeredSlides: true,
				speed: 1400,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					dynamicBullets: true
				},
				breakpoints: {
					1000: {
						slidesPerView: 2
					}
				}
			});

			var view1Swiper = new Swiper ('.js-1-view-slider', {
				speed: 1400,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					dynamicBullets: true
				}
			});

			var infiniteSwiper = new Swiper ('.js-infinite-slider', {
				slidesPerView: 2,
				spaceBetween: 20,
				speed: 5000,
				loop: true,
				autoplay: {
					delay: 0
				},
				breakpoints: {
					400: {
						slidesPerView: 3
					},
					550: {
						slidesPerView: 4
					},
					768: {
						slidesPerView: 5
					},
					1000: {
						slidesPerView: 6
					}
				}
			});

			/* 4. Isotope filter */
			function projectFilter() {
				var $gridt = $('.js-isotope-filter-grid-box');
				$gridt.isotope({
					itemSelector: '.js-isotope-filter-grid-item',
					percentPosition: true
				});
				$('.js-filter-button-box').on('click', '.js-filter-button', function () {
					var filterValue = $(this).attr('data-filter');
					$gridt.isotope({
						filter: filterValue
					});
					$(this).addClass('js-filter-button-active').siblings().removeClass('js-filter-button-active');
				});
			};
			projectFilter();

			$('.js-isotope-grid-box').isotope({
				itemSelector: '.js-isotope-grid-item',
				percentPosition: true
			});
		});

		/* 5. Scroll animations */
		var controller = new ScrollMagic.Controller();

		$(".js-img-scale").each(function() {
			var ourScene1 = new ScrollMagic.Scene({
				triggerElement: this,
				reverse: true,
				triggerHook: 1
			})
			.setClassToggle(this, "js-img-scale-active")
			.addTo(controller);
		});

		$(".js-scrollanim").each(function() {
			var ourScene2 = new ScrollMagic.Scene({
				triggerElement: this,
				reverse: false,
				triggerHook: .7
			})
			.setClassToggle(this, "js-scrollanim-active")
			.addTo(controller);
		});

		$(".js-touch .js-touch-hover-scroll").each(function() {
			var ourScene3 = new ScrollMagic.Scene({
				triggerElement: this,
				reverse: false,
				triggerHook: .5
			})
			.setClassToggle(this, "js-hover-active")
			.addTo(controller);
		});

		$(".js-slider-scroll-anim").each(function() {
			var ourScene4 = new ScrollMagic.Scene({
				triggerElement: this,
				reverse: true,
				triggerHook: 1
			})
			.setClassToggle(this, "js-slider-scroll-anim-active")
			.addTo(controller);
		});

		/* 6. Navigation open/close */
		$( ".js-menu-open-close" ).on( "click", function() {
			$('body').toggleClass('js-nav-active');
		});

		$( ".js-landing-close" ).on( "click", function() {
			$('body').removeClass('js-nav-active');
		});

		/* 7. Drop-down menu */
		$('.js-dropdown-open').on("click",function() {
			$('.js-dropdown-active-box').addClass('js-dropdown-is-active');
			$(this).find('.js-dropdown').addClass('js-dropdown-is-active');
		});

		$('.js-dropdown-slider-open').on("click",function() {
			$('.js-dropdown-active-box').addClass('js-dropdown-is-active');
			$(this).find('.js-dropdown').addClass('js-dropdown-is-active');
			$('.js-nav-slider-bg').addClass('js-dropdown-is-active');
			$('.js-nav-anim').addClass('js-dropdown-is-active');
		});

		$('.js-dropdown-close').on("click",function() {
			$('.js-dropdown-active-box').removeClass('js-dropdown-is-active');
			$('.js-dropdown').removeClass('js-dropdown-is-active');
			$('.js-nav-slider-bg').removeClass('js-dropdown-is-active');
			$('.js-nav-anim').removeClass('js-dropdown-is-active');
		});

		/* 8. Midnight header */
		$('.js-midnight-color').midnight();

	});

	/* 9. Footer hover effect */
	$('.js-footer-hover-link').on('mouseenter', function() {
		$('.js-footer-hover-box').addClass('js-footer-hover-active');
	});
	$('.js-footer-hover-link').on('mouseleave', function() {
		$('.js-footer-hover-box').removeClass('js-footer-hover-active');
	});

	/* 10. Magnific popup */
	$('.js-photo-popup').magnificPopup({
		type: 'image',
		mainClass: 'mfp-with-zoom', // this class is for CSS animation below
		gallery: {
			// options for gallery
			enabled: true
		},
		zoom: {
			enabled: true, // By default it's false, so don't forget to enable it
			duration: 800, // duration of the effect, in milliseconds
			easing: 'cubic-bezier(.858, .01, .068, .99)', // CSS transition easing function
			// The "opener" function should return the element from which popup will be zoomed in
			// and to which popup will be scaled down
			// By defailt it looks for an image tag:
			opener: function(openerElement) {
				// openerElement is the element on which popup was initialized, in this case its <a> tag
				// you don't need to add "opener" option if this code matches your needs, it's defailt one.
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		}
	});

	$('.js-popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false
	});

	/* 11. Touch, no touch */
/* ============== SUPPORTS TOUCH OR NOT ========= */
/*! Detects touch support and adds appropriate classes to html and returns a JS object
  Copyright (c) 2013 Izilla Partners Pty Ltd  | http://www.izilla.com.au 
  Licensed under the MIT license  |  https://coderwall.com/p/egbgdw
*/
	var supports = (function() {
		var d = document.documentElement,
			c = "ontouchstart" in window || navigator.msMaxTouchPoints;
		if (c) {
			d.className += " js-touch";
			return {
				touch: true
			}
		} else {
			d.className += " js-no-touch";
			return {
				touch: false
			}
		}
	})();

	/* 12. Scroll to id */
	$('.js-smooth-scroll').mPageScroll2id();

	/* 13. Progress bar */
	$(".js-progress-animate-box").each(function() {
		$(this).find(".js-progress-animate").animate({
			width: $(this).attr("data-progress")
		});
	});

	/* 14. Accordion */
/*
Copyright (c) 2020 by Srdjan Pajdic (https://codepen.io/MightyShaban/pen/LqrCK)

Permission is hereby granted, free of charge, to any person obtaining a copy of 
this software and associated documentation files (the "Software"), to deal in 
the Software without restriction, including without limitation the rights to 
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies 
of the Software, and to permit persons to whom the Software is furnished to do 
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all 
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
SOFTWARE.
*/
	$('.js-accordion-first-active .js-accordion-tab:first-child .js-accordion-btn').addClass('js-accordion-active').next().slideDown();

	$( ".js-accordion-btn" ).on( "click", function(j) {
		var dropDown = $(this).closest('.js-accordion-tab').find('.js-accordion-content');

		$(this).closest('.js-accordion').find('.js-accordion-content').not(dropDown).slideUp();

		if ($(this).hasClass('js-accordion-active')) {
			$(this).removeClass('js-accordion-active');
		} else {
			$(this).closest('.js-accordion').find('.js-accordion-btn.js-accordion-active').removeClass('js-accordion-active');
			$(this).addClass('js-accordion-active');
		}

		dropDown.stop(false, true).slideToggle();

		j.preventDefault();
	});

	/* 15. Headroom */
	$(".js-headroom").headroom();

	/* 16. Scroll btn hide on scroll */
	$(window).on("scroll", function() {
		if($(window).scrollTop() > 150) {
			$(".js-scroll-btn").addClass("js-active");
		} else {
			$(".js-scroll-btn").removeClass("js-active");
		}
	});

	/* 17. Parallax background */
	$(window).on("scroll", function() {
		parallax();
	});

	function parallax() {
		var wScroll = $(window).scrollTop();
		$('.js-parallax-bg').css('background-position', 'center '+(wScroll*0.25)+'px')
	}

	/* 18. Contact form */
	$("#send_form").on('submit', function(){
		var first_name = $("#first_name").val().trim();
		var last_name = $("#last_name").val().trim();
		var email = $("#email").val().trim();
		var message = $("#message").val().trim();

		$.ajax({
			url: 'assets/ajax/mail.php',
			type: 'POST',
			cache: false,
			data: {'first_name': first_name, 'last_name': last_name, 'email': email, 'message': message},
			dataType: 'html',
			beforeSend: function() {
				$("#send").addClass("js-active");
			},
			success: function(data) {
				if(!data || data != "Good"){
					$("#m_err").addClass("js-active");
					$(".form-box").addClass("js-active");
					$("#send").removeClass("js-active");
				}

				else {
					$("#m_sent").addClass("js-active");
					$(".form-box").addClass("js-active");
					$("#send").removeClass("js-active");
					$("#send_form").trigger("reset");
				}
				$('.js-popup-close').click(function() {
					$(this).parents('.js-popup-fade').removeClass("js-active");
					$('.form-box').removeClass("js-active");
					return false;
				});

				$(document).keydown(function(e) {
					if (e.keyCode === 27) {
						e.stopPropagation();
						$('.js-popup-fade').removeClass("js-active");
						$('.form-box').removeClass("js-active");
					}
				});

				$('.js-popup-fade').click(function(e) {
						if ($(e.target).closest('.js-popup').length == 0) {
						$('.js-popup-fade').removeClass("js-active");
						$('.form-box').removeClass("js-active");
					}
				});
			},
		})
		return false;
	});

});