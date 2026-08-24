var windowWidth = document.documentElement.clientWidth || document.body.clientWidth;

if (windowWidth < 769) {

	window['adaptive'].desinWidth = 750;

	window['adaptive'].baseFont = 24;

	window['adaptive'].maxWidth = 750;

	window['adaptive'].minWidth = 320;

	window['adaptive'].scaleType = 1;

	window['adaptive'].init();

} else {

	window['adaptive'].desinWidth = 1600;

	window['adaptive'].baseFont = 14;

	window['adaptive'].maxWidth = 1600;

	window['adaptive'].minWidth = 750;

	window['adaptive'].scaleType = 1;

	window['adaptive'].init();

}

//直接执行 js

function getScrollTop() { return $('html').scrollTop() || $('body').scrollTop() }

$(window).scroll(function () {



	var scrollTop = getScrollTop();

	if (scrollTop > 50) {

		$('.header').addClass('is_header');

	} else {

		$('.header').removeClass('is_header')

	}

})



$(function () {

	if ($(window).width() > 990) {



		$('.right_fixed ul li:nth-child(3)').hover(function () {

			

			$(this).find('.shop_info').addClass('act')

		}, function () {

			$(this).find('.shop_info').removeClass('act')

		})

		

	} else {

	

		$('.right_fixed ul li:nth-child(3)>a').click(function (e) {

		

			e.stopPropagation()

			$(this).parent().find('.shop_info').toggleClass('act')

		})

	

		

	}

	$(".right_fixed ul li:nth-child(3) .shop_info .more a.closes").click(function(){

		$('.right_fixed ul li:nth-child(3)').find('.shop_info').removeClass("act")

	})

	

})







/*判断滚动方向

$(document).ready(function(){

	var p=0,t=0;

	$(window).scroll(function(){

		p=$(this).scrollTop();

		if(t<p){

			var scrollTop = getScrollTop();

			if(scrollTop>120){

				$('.header').css({'top':'-1.48rem'})

			}

		}else{

			$('.header').css({'top':'0'})

		}

		setTimeout(function(){ t = p ; },0)

	})

})

*/

$(window).resize(function () {

	autosize();

})

function autosize() {



}

autosize();

//

// $(document).ready(function() {

//     var element1Height = $('.tem_banner.index #heivideo').height();

//     alert(element1Height);

//     $('.tem_banner.index .video video').height(element1Height);

// });

$(function () {

	if (!$('.about_workshop ').length) return;

	var swiper = new Swiper('.about_workshop .lists .swiper-container', {

		autoplay: { delay: 4500 },

		speed: 1000,

		loop: false,

		slidesPerView: 2,

		spaceBetween: 10,

		breakpoints: {

			767: {

				slidesPerView: 3,

				spaceBetween: 28,

				slidesPerColumn: 0,

			},

		},

		lazy: {

			loadPrevNext: true,

			loadPrevNextAmount: 3

		},

		navigation: {

			nextEl: '.about_workshop .lists .slide-button-next',

			prevEl: '.about_workshop .lists .slide-button-prev',

		},

		pagination: {

			el: '.about_workshop .lists  .slide-pagination',

			clickable: true,

			renderBullet: function (index, className) {

				return '<span class="' + className + '">' + (index + 1) + '</span>';

			},



		},



	})

})

$(function () {

	if (!$('.pro_list_fit').length) return;

	var swiper = new Swiper('.pro_list_fit .lists .swiper-container', {

		autoplay: { delay: 4500 },

		speed: 1000,

		loop: true,

		slidesPerView: 3,

		spaceBetween: 10,

		breakpoints: {

			767: {

				slidesPerView: 5,

				spaceBetween: 20,

				slidesPerColumn: 0,

			},

		},

		lazy: {

			loadPrevNext: true,

			loadPrevNextAmount: 5

		},

	})

})

$(function () {

	if (!$('.pro_con_list_fit').length) return;

	var swiper = new Swiper('.pro_con_list_fit .lists .swiper-container', {

		autoplay: { delay: 4500 },

		speed: 1000,

		loop: true,

		slidesPerView: 3,

		spaceBetween: 10,

		breakpoints: {

			767: {

				slidesPerView: 5,

				spaceBetween: 25,

				slidesPerColumn: 0,

			},

		},

		lazy: {

			loadPrevNext: true,

			loadPrevNextAmount: 5

		},

	})

})

$(function () {

	if (!$('.about_honor').length) return;

	var swiper = new Swiper('.about_honor .lists .swiper-container', {

		autoplay: { delay: 4500 },

		speed: 1000,

		loop: true,

		slidesPerView: 3,

		spaceBetween: 15,

		breakpoints: {

			767: {

				slidesPerView: 5,

				spaceBetween: 25,

				slidesPerColumn: 0,

			},

		},

		lazy: {

			loadPrevNext: true,

			loadPrevNextAmount: 5

		},

		pagination: {

			el: '.about_honor .lists .slide-pagination',

			clickable: true,

		},

	})

})

$(function () {

	if (!$('.product_detalis .top .left').length) return;

	var gallerySwiper = new Swiper('.product_detalis .top .left .bigimg #gallery', {

		speed:500,

		slidesPerView: 1,

		spaceBetween: 10,

		lazy: {

			loadPrevNext: true,

			loadPrevNextAmount: 1

		},



		thumbs: {

			swiper: {

				el: '.product_detalis .top .left .img_list  #thumbs',

				autoplay: false,

				speed: 200,

				loop: false,

				slidesPerView: 3,

				spaceBetween: 10,

				breakpoints: {

					768: {

						slidesPerView: 6,

						spaceBetween: 10,

					}

				},

				watchSlidesVisibility: true,

				lazy: {

					loadPrevNext: true,

					loadPrevNextAmount: 6

				},



			},

			autoScrollOffset: 1,

		}

	})

	// var thumbsSwiper = new Swiper('#thumbs', {

	// 	spaceBetween: 10,

	// 	slidesPerView: 4,

	// 	watchSlidesVisibility: true,

	// 	lazy: {

	// 		loadPrevNext: true,

	// 		loadPrevNextAmount: 4

	// 	},



	// })

	// var gallerySwiper = new Swiper('#gallery', {

	// 	thumbs: {

	// 		swiper: thumbsSwiper,

	// 		lazy: {

	// 		loadPrevNext: true,

	// 		loadPrevNextAmount: 1

	// 	},

	// 	},



	// })

})

$(function () {



	$('.pro_nav > ul > li > a').click(function () {

		$('.pro_nav > ul > li > a').removeClass('active');

		$(this).addClass('active');

	});



	$('.pro_nav > ul > li > a').click(function () {





		var $submenu = $(this).next('.pro_nav_two');



		if ($submenu.is(':visible')) {

			$submenu.slideUp();

			$(this).removeClass('active');

		} else {

			$('.pro_nav_two').not($submenu).slideUp();

			$submenu.slideDown();

			$('.pro_nav_two a').removeClass('active');

			$(this).addClass('active');

		}

	});



	$('.pro_nav_two > li > a').click(function () {





		var $submenu = $(this).next('.pro_nav_third');



		if ($submenu.is(':visible')) {

			$submenu.slideUp();

			$(this).removeClass('active');

		} else {

			$('.pro_nav_third').not($submenu).slideUp();

			$submenu.slideDown();

			$('.pro_nav_third a').removeClass('active');

			$(this).addClass('active');

		}

	});

})

$(function () {

	$('.header .right .search>a').click(function () {

		$(this).next('.s-content').stop().slideToggle()

		// $('.header-body').toggleClass('is_header');

		return false;

	})

	$('.header .right .search .s-content').mouseleave(function () {



		// $('.header-body').removeClass('is_header');

		$(this).stop().slideUp();

		return false;

	})

});





$(function () {

	if (!$('.download').length) return;



	var $li3n = $(".download .lists .items:nth-child(6n)").each(function (i) {

		$(".download .lists  .items").slice(i * 6, i * 6 + 6).wrapAll("<div class='swiper-slide'></div>");

	});

	//剩下的再用ul包起来

	$(".download .lists  .items").slice($li3n.length * 6).wrapAll("<div class='swiper-slide'></div>");

	var swiper = new Swiper('.download .lists   .swiper-container', {

		autoplay: false,

		speed: 1000,

		loop: false,



		slidesPerView: 1,

		spaceBetween: 0,



		navigation: {

			nextEl: '.download .lists  .slide-button-next',

			prevEl: '.download .lists .slide-button-prev',

		},

		pagination: {

			el: '.download .lists   .slide-pagination',

			clickable: true,

			renderBullet: function (index, className) {

				return '<span class="' + className + '">' + (index + 1) + '</span>';

			},



		},





	})

})

$(function () {

	$('.faq_box>div .lists ul li .title').click(function () {

		$(this).next('.info').slideToggle();

		$(this).parent().toggleClass('active');



	});

})





$(function () {

	if (!$('.map').length) return;

	var tur = true;

	$(window).scroll(function () {

		var totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop()), mapb = $('.map').height() / 2;

		if ($('.map').offset().top + mapb < totalheight) {

			if (tur) {

				$('.map_loading').delay(250).fadeOut(400);

				tur = false;

			}

		}

	})

})

$(function () {

	if (!$('body.index').length) return;

	if ($('.tem_banner1').length) {

		var swiper = new Swiper('.tem_banner1 .swiper', {

			autoplay: {

				delay: 9000,

				disableOnInteraction: false

			},

			speed: 1000,

			loop: true,

			slidesPerView: 1,

			spaceBetween: 0,

			effect: 'fade',

			fadeEffect: {

				crossFade: true,

			},

			lazy: {

				loadPrevNext: true,

				loadPrevNextAmount: 2

			},

			navigation: {

				nextEl: '.tem_banner .slide-button-next',

				prevEl: '.tem_banner .slide-button-prev',

			},

			pagination: {

				el: '.tem_banner .slide-pagination',

				clickable: true,

			},

			on: {

				slideChange: function () {

					var activeSlide = this.slides[this.activeIndex];

					var videos = activeSlide.querySelectorAll('video');

					videos.forEach(video => {



						video.currentTime = 0;

						video.play();



					});

				},

			},

		});

	} else if ($('.tem_banner2').length) {

		var interleaveOffset = 0.5;

		var swiperOptions = {

			autoplay: { delay: 5500 },

			speed: 1300,

			loop: true,

			lazy: {

				loadPrevNext: true,

				loadPrevNextAmount: 2

			},

			grabCursor: true,

			navigation: {

				nextEl: '.tem_banner .slide-button-next',

				prevEl: '.tem_banner .slide-button-prev',

			},

			pagination: {

				el: '.tem_banner .slide-pagination',

				clickable: true,

			},

			watchSlidesProgress: true,

			mousewheelControl: true,

			keyboardControl: true,

			on: {

				progress: function () {

					var swiper = this;

					for (var i = 0; i < swiper.slides.length; i++) {

						var slideProgress = swiper.slides[i].progress;

						var innerOffset = swiper.width * interleaveOffset;

						var innerTranslate = slideProgress * innerOffset;

						swiper.slides[i].querySelector(".slide-inner").style.transform =

							"translate3d(" + innerTranslate + "px, 0, 0)";

					}

				},

				touchStart: function () {

					var swiper = this;

					for (var i = 0; i < swiper.slides.length; i++) {

						swiper.slides[i].style.transition = "";

					}

				},

				setTransition: function (speed) {

					var swiper = this;

					for (var i = 0; i < swiper.slides.length; i++) {

						swiper.slides[i].style.transition = speed + "ms";

						swiper.slides[i].querySelector(".slide-inner").style.transition =

							speed + "ms";

					}

				}

			}

		};

		var swiper = new Swiper(".tem_banner2 .swiper", swiperOptions);

	} else if ($('.tem_banner3').length) {

		var swiper = new Swiper('.tem_banner3 .swiper', {

			autoplay: { delay: 5000, disableOnInteraction: false, },

			speed: 500,

			loop: true,

			slidesPerView: 1,

			spaceBetween: 0,

			effect: 'fade',

			lazy: {

				loadPrevNext: true,

				loadPrevNextAmount: 2

			},

			navigation: {

				nextEl: '.tem_banner .slide-button-next',

				prevEl: '.tem_banner .slide-button-prev',

			},

			pagination: {

				el: '.tem_banner .slide-pagination',

				clickable: true,

			},

		})

	} else if ($('.tem_banner4').length) {

		var swiper = new Swiper('.tem_banner4 .swiper', {

			autoplay: { delay: 4500 },

			speed: 1000,

			loop: true,

			slidesPerView: 1,

			spaceBetween: 0,

			effect: 'fade',

			fadeEffect: {

				crossFade: true,

			},

			lazy: {

				loadPrevNext: true,

				loadPrevNextAmount: 2

			},

			navigation: {

				nextEl: '.tem_banner .slide-button-next',

				prevEl: '.tem_banner .slide-button-prev',

			},

			pagination: {

				el: '.tem_banner .slide-pagination',

				clickable: true,

			},

		})

	} else if ($('.tem_banner5').length) {

		var swiper = new Swiper('.tem_banner5 .swiper', {

			autoplay: { delay: 4500 },

			speed: 1000,

			loop: true,

			slidesPerView: 1,

			spaceBetween: 0,

			effect: 'creative',

			creativeEffect: {

				prev: {

					shadow: true,

					origin: "left center",

					translate: ["-5%", 0, -200],

					rotate: [0, 100, 0],

				},

				next: {

					origin: "right center",

					translate: ["5%", 0, -200],

					rotate: [0, -100, 0],

				},

			},

			lazy: {

				loadPrevNext: true,

				loadPrevNextAmount: 2

			},

			navigation: {

				nextEl: '.tem_banner .slide-button-next',

				prevEl: '.tem_banner .slide-button-prev',

			},

			pagination: {

				el: '.tem_banner .slide-pagination',

				clickable: true,

			},

		})

	}

})



/*

$(function(){

	if(!$('.show_product').length)return;

	var gallerySwiper = new Swiper('#gallery',{

		autoplay:false,

		spaceBetween: 0,

		speed:1000,

		loop : false,

		slidesPerView : 1,

		lazy: {

			loadPrevNext: true,

			loadPrevNextAmount: 2

		},

		navigation: {

			nextEl: '.sm_list .slide-button-next',

			prevEl: '.sm_list .slide-button-prev',

		},

		thumbs: {

			swiper: {

				el: '#thumbs',

				autoplay:false,

				spaceBetween: 15,

				speed:1000,

				loop : false,

				slidesPerView : 4,

				watchSlidesVisibility: true,

				lazy: {

					loadPrevNext: true,

					loadPrevNextAmount: 2

				},

			},

			autoScrollOffset: 1,

		}

	})

})

*/

$(function () {

	if (!$('.contact_box').length) return;

	$('.contact_box .message li button').click(function () {

		let a = $('.contact_box .message li input[name="name"]'),

			b = $('.contact_box .message li input[name="comname"]'),



			d = $('.contact_box .message li input[name="tel"]'),

			e = $('.contact_box .message li textarea'),

			m = /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;

		if (a.val() == '') {

			alert(lang == 'cn' ? '请输入姓名' : 'Please enter your name')

			a.focus();

			a.addClass('err');

			return false;

		} else if (b.val() == '') {

			alert(lang == 'cn' ? '请输入公司名称' : 'Please enter the company name')

			b.addClass('err');

			b.focus();

			return false;

		} else if (c.val() == '') {

			alert(lang == 'cn' ? '请输入邮箱' : 'Please enter email')

			c.addClass('err');

			c.focus();

			return false;

		} else if (d.val() == '') {

			alert(d.attr('placeholder'))

			d.addClass('err');

			d.focus();

			return false;

		} else if (e.val().trim() == '') {

			alert(e.attr('placeholder'))

			e.addClass('err');

			e.focus();

			return false;

		} else {

			$('.contact_box .message li input,.contact_box .message li textarea').removeClass('err')

			return;

		}

	})

})