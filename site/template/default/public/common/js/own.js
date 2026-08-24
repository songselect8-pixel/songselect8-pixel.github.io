define(function (require) {

	$(function () {



		void function () {

			//全局通用

			setTimeout(function () {

				$('body').append('<style>*{transition:all .36s linear}</style>');

			}, 500)

			//侧边栏导航

			require.async(['mmenu', 'mmenu.css'], function () {

				$('nav#menu').mmenu({

					extensions: ['effect-slide-menu', 'pageshadow'],

					searchfield: true,

					counters: true,

					navbar: {

						title: 'Advanced menu'

					},

					navbars: [

						{

							position: 'top',

							content: ['searchfield']

						}, {

							position: 'top',

							content: [

								'prev',

								'title',

								'close'

							]

						}, {

							position: 'bottom',

							content: [

								' WordPress plugin '

							]

						}

					]

				});

			})

		

	

			// //滚动条

			// require.async(['nicescroll'],function(){

			// 	$("html").niceScroll({ 

			// 		scrollspeed: 200,

			// 		smoothscroll: true,

			// 		horizrailenabled: false,

			// 		cursorwidth: "8px"

			// 	})			

			// })	

			/*

			$(document).on('click','body',function(event){

				var _con = $('.header .item .infos .langs');

				if(!_con.is(event.target) && _con.has(event.target).length === 0){

					$('.header .item .infos .langs dl').slideUp();

				}

			});*/

			/*/去除&nbsp; 空格

			var a=$('.f_search form').html().replace(/&nbsp;/ig,'');

			$('.f_search form').html(a);	*/



			// /*手机导航2 mobile phone nav*/

			if (!$('.m_header2').length) return;



			$('.ys_navph2_menu_btn').click(function () {

				$('.ys_navph2_modal').slideUp();

				if ($(this).is('.act')) {

					$(this).removeClass('act');

					$('.ys_navph2_list').removeClass('act');

					$('.ys_navph2_lang_modal').removeClass('act');

					setTimeout(function () {

						$('.ys_navph2_subnav_li').removeClass('act')

						$('.ys_navph2_subnav_li').find('.ys_navph2_thirnav').slideUp();

					}, 350)

				} else {

					$(this).addClass('act');

					$('.ys_navph2_list').addClass('act');

				}

			})

			$('.ys_navph2_subnav_lisbox').click(function () {

				if (!$(this).parent().is('.act')) {

					$('.ys_navph2_subnav>li,.ys_navph2_thirnav_li ').removeClass('act');

					$('.ys_navph2_subnav>li>ul,.ys_navph2_thirnav_li>ul').slideUp();



					$(this).parent().addClass('act');

					$(this).next().slideDown();

				} else {



					$(this).parent().removeClass('act');

					$(this).next().slideUp();

				}

			})

			$('.ys_navph2_thirnav_lisbox').click(function () {

				if (!$(this).parent().is('.act')) {

					$('.ys_navph2_thirnav>li,.ys_navph2_fournav>li').removeClass('act');

					$('.ys_navph2_thirnav>li>ul,.ys_navph2_fournav>li>ul').slideUp();



					$(this).parent().addClass('act');

					$(this).next().slideDown();

				} else {

					$(this).parent().removeClass('act');

					$(this).next().slideUp();

				}

			})

			$('.ys_navph2_fournav_lisbox').click(function () {

				if (!$(this).parent().is('.act')) {

					$('.ys_navph2_fournav>li').removeClass('act');

					$('.ys_navph2_fournav>li>ul').slideUp();



					$(this).parent().addClass('act');

					$(this).next().slideDown();

				} else {

					$(this).parent().removeClass('act');

					$(this).next().slideUp();

				}

			})

			

			//

			$('.ys_navph2_lang').click(function () {

				$('.ys_navph2_lang_modal').addClass('act');

			})

			//

			$('.ys_navph2_lang_back').click(function () {

				$(this).parent().removeClass('act');

				let a = $(this);

				setTimeout(function () {

					a.next().children('li').removeClass('act')

					a.next().find('.ys_navph2_thirnav').slideUp();

				}, 350)

			})

			//

			$('.m_header2 a.search_').click(function () {

				$('.ys_navph2_modal').slideToggle();

			})

		}()

		void function () {

			//高德地图执行--不要删除

			if (!$('.map').length) return;

			require.async(['https://webapi.amap.com/maps?v=1.4.15&key=04dc3d6cea0acd7efcdf421ffd378800'], function () {

				maps_own();

			})

		}()

		// void function(){

		// 	if(!$('.about_culture').length)return;

		// 	require.async(['mCustomScrollbar','mCustomScrollbar.css'],function(){

		// 		$('.about_culture .lists').mCustomScrollbar();

		// 	})

		// }()

	

		void function () {

			//无缝滚动

			if (!$('#his_list').length) return;

			var odiv = document.getElementById('his_list');

			var oul = odiv.getElementsByTagName('ul')[0];

			var ali = oul.getElementsByTagName('li');

			//var wid=$('.his_list').width();

			var spa = -2;

			//$('.his_list li').width(wid);

			oul.innerHTML = oul.innerHTML + oul.innerHTML;

			oul.style.width = ali[0].offsetWidth * ali.length + 'px';

			function move() {

				if (oul.offsetLeft < -oul.offsetWidth / 2) {

					oul.style.left = '0';

				}

				if (oul.offsetLeft > 0) {

					oul.style.left = -oul.offsetWidth / 2 + 'px'

				}

				oul.style.left = oul.offsetLeft + spa + 'px';

			}

			var timer = setInterval(move, 30)



			odiv.onmousemove = function () { clearInterval(timer); }

			odiv.onmouseout = function () { timer = setInterval(move, 30) };

			/*document.getElementsByTagName('a')[0].onclick = function(){

				spa=-2;

			}

			document.getElementsByTagName('a')[1].onclick = function(){

				spa=2;

			}*/

		}()

		//全屏滚动

		void function () {

			if (!$('#fullpage').length) return;

			require.async(['fullpage', 'fullpage.css', 'slimscroll'], function () {

				$('#fullpage').fullpage({

					menu: false,

					anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],

					navigation: true,

					scrollingSpeed: 1500,

					easing: 'easeInOutCubic',

					easingcss3: 'ease',

					touchSensitivity: 15,

					afterRender: function () { },

					afterLoad: function (anchorLink, index) { },

					onLeave: function (index, nextIndex, direction) { }

				})

			})

		}()



		/*全局加载动画效果

		void function(){

			require.async(['scrolly','cssanimation.css'],function(){

				$('.tem_banner .label_text').children().each(function(i){

					i++;

					$(this).css({'opacity':'1'})

					$(this).attr({'data-scrolly-top':'fadeInTop,delay:'+i*0.2+'s','data-scrolly-down':'fadeInBottom,delay:'+i*0.2+'s'})

				})		

				scrolly();

			})

		}()*/

		//全局加载动画效果



		void function(){

			require.async(['aos','aos.css'],function(){

				// $('.main').children().each(function(i){

				// 	$(this).attr("data-aos", "zoom-out");

				// 	$(this).attr('data-aos-delay',i*100)



				// })

		

				// var aos = new AOS({

				// 	duration: 900,

				// });

				AOS.init({

					

					// offset: -150,

					// delay: 300,

					duration: 600,

					// easing: 'ease-in-sine',

					// once:true



				  });

			})

		}()

		void function(){

			require.async(['wow','cssanimation.css'],function(){

				$('.tem_index_about .text,.company .mains>div.text').children().each(function(i){

					$(this).addClass('wow blurInTop');

					$(this).attr('data-wow-delay',i*0.2+'s')	

				})



				var wow = new WOW({

					boxClass: 'wow',

					animateClass: 'cssanimation',

					offset: 0,

					mobile: true,

					live: true

				});

				wow.init();

			})

		}()

		void function(){

			if(!$('.about_box').length)return;

			require.async(['animateNumber'],function(){

				var tur = true; 

				$(window).scroll(function(){

					var totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());

					if($('.about_box').offset().top < totalheight){

						if(tur){

							$('.about_box .about_middle .guimo ul li h1 em').each(function(){

								var self = $(this);

								var end = Number(self.text())

								self.prop('number',0).animateNumber({number: end}, 2500);

							});				

							tur = false; 

						}

					}

				})

			})

		}()

		/*

		void function(){

			require.async(['animatescroll'],function(){

				$('.suspension>span').click(function(){

					$('body').animatescroll({scrollSpeed:2000,easing:'easeInOutBack'});

				})

			})

		}()

		数字滚动

		void function(){

			if(!$('.tem_index_about').length)return;

			require.async(['animateNumber'],function(){

				var tur = true; 

				$(window).scroll(function(){

					var totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());

					if($('.tem_index_about').offset().top < totalheight){

						if(tur){

							$('.tem_index_about .nums > div h5 em').each(function(){

								var self = $(this);

								var end = Number(self.text())

								self.prop('number',0).animateNumber({number: end}, 2500);

							});				

							tur = false; 

						}

					}

				})

			})

		}()

		void function(){

			if(!$('.prenatal_care').length)return;

			$(".main4 .info_list").children().hide(); 

			$(".main4 ol>li:first").attr("id","current"); 

			$(".main4 .info_list>div:first").fadeIn(); 

			$('.main4 ol>li a').click(function(e) {

				e.preventDefault();        

				$(".main4 .info_list").children().hide(); 

				$(".main4 ol>li").attr("id",""); 

				$(this).parent().attr("id","current"); 

				$('#' + $(this).attr('data-name')).fadeIn(); 

			});	

		}()

		*/

		// void function() {

		// 	// $('.header .navs>ul>li .pro_dl ul.mod_one li').each(function(index){

		// 	// 		$('.header .navs>ul>li .pro_dl ul.mod_one li').eq(index).find('.img').stop().slideDown()	

		// 	// })

			

		// }();

		void function () {
		$('.header .navs>ul>li').hover(function(){
			$(this).find('.nav_dl').stop().slideDown(function(){       
			})
		},function(){
			$(this).find('.nav_dl').stop().slideUp(function(){
			})

		})
	}
		void function () {

			var $listItems = $('.header .navs > ul > li .pro_dl ul.mod_one li');



			if ($listItems.filter('.cats').length === 0) {

				$listItems.first().addClass('cats').find('.img').stop().slideDown();

			} else {

				$listItems.each(function() {

					if ($(this).hasClass("cats")) {

						$(this).find('.img').stop().slideDown();

					} else {

						$(this).find('.img').stop().slideUp();

					}

				});

			}

			var $listItem = $('.header .navs > ul > li .pro_dl ul.mod_two li');

			if ($listItem.filter('.cats').length === 0) {

				$listItem.first().addClass('cats');

			}

			$('.header .navs>ul>li').hover(function(){

				$(this).find('.pro_dl').stop().slideDown(function(){       

		

				})

					

			},function(){

				

				$(this).find('.pro_dl').stop().slideUp(function(){

					

				})

			})



			

			

			$('.header .navs>ul>li .pro_dl ul.mod_one li').hover(function(){

				$(this).find('.img').stop().slideDown()

				$(this).addClass("cats").siblings().removeClass("cats").find('.img').stop().slideUp()

			});

			$(".header .navs>ul>li .pro_dl ul.mod_one li").hover(

				function() {

					var index = $(this).index();

					$(".header .navs>ul>li .pro_dl ul.mod_two li").eq(index).stop().fadeIn(100).siblings().stop().hide();

				

			})

			$('.header .navs > ul > li .pro_dl ul.mod_two .item a').hover(function(e) {

				e.preventDefault();     

				var dhid = $(this).data('dhid');

				$('.header .navs > ul > li .pro_dl ul.mod_thid > div').not('#' + dhid).hide();

				$('#' + dhid).fadeIn(100);

			});

		

			$('.header .navs>ul>li .pro_dl ul.mod_thid .item a').hover(function(e) {

				e.preventDefault();     

				var sdhid = $(this).data('sdhid');

				$('.header .navs > ul > li .pro_dl ul.mod_forth > div').not('#' + sdhid).hide();

				$('#' + sdhid).fadeIn(100);

			});

			$('.header .navs > ul > li .pro_dl ul.mod_one li').hover(function() {

				$('.header .navs > ul > li .pro_dl ul.mod_thid > div').fadeOut(100);

				$('.header .navs > ul > li .pro_dl ul.mod_forth > div').fadeOut(100);

			});

		

			$('.header .navs > ul > li .pro_dl ul.mod_two li').hover(function() {

				

				$('.header .navs > ul > li .pro_dl ul.mod_forth > div').fadeOut(100);

			});

		}()

		

		void function () {

			if (!$('#yourImageId').length) return;

			require.async(['bttrlazyloading', 'bttrlazyloading.css', 'animate.css'], function () {

				$('.bttrlazyloading').bttrlazyloading();

			})

		}()

		void function(){



			if(!$('.about_video').length)return;

	

			$('.about_video .plays_').click(function(){

	

				let html_='<div class="video_fixed"><div class="close_"><i>X</i></div><div class="mains"><video src="./template/default/public/common/images/video.mp4" autoplay="autoplay" loop="" muted=""  controls="controls"></div></div>';

	

				$('.about_video').append(html_);

	

				$('.video_fixed').fadeIn();

	

				setTimeout(function(){

	

					$('.video_fixed .mains').addClass('on');

	

				},160)			

	

			})

	

			$(document).on('mouseenter','.video_fixed .mains',function(){

	

				$(this).parent().removeClass('video_fixed_on')

	

			})

	

			$(document).on('mouseleave','.video_fixed .mains',function(){

	

				$(this).parent().addClass('video_fixed_on')

	

			})	

	

			$(document).on('click','.video_fixed .close_,.video_fixed_on',function(){

	

				$('.video_fixed .mains').removeClass('on');

	

				setTimeout(function(){

	

					$('.video_fixed').fadeOut();

	

					setTimeout(function(){

	

						$('.video_fixed').remove();

	

					},320)

	

				},300)

	

			})		

	

		}()

		void function(){



			if(!$('.index_about').length)return;

	

			$('.index_about .left .plays_').click(function(){

	

				let html_='<div class="video_fixed"><div class="close_"><i>X</i></div><div class="mains"><video src="./template/default/public/common/images/video.mp4" autoplay="autoplay" loop="" muted=""  controls="controls"></div></div>';

	

				$('.index_about_video').append(html_);

	

				$('.video_fixed').fadeIn();

	

				setTimeout(function(){

	

					$('.video_fixed .mains').addClass('on');

	

				},160)			

	

			})

	

			$(document).on('mouseenter','.video_fixed .mains',function(){

	

				$(this).parent().removeClass('video_fixed_on')

	

			})

	

			$(document).on('mouseleave','.video_fixed .mains',function(){

	

				$(this).parent().addClass('video_fixed_on')

	

			})	

	

			$(document).on('click','.video_fixed .close_,.video_fixed_on',function(){

	

				$('.video_fixed .mains').removeClass('on');

	

				setTimeout(function(){

	

					$('.video_fixed').fadeOut();

	

					setTimeout(function(){

	

						$('.video_fixed').remove();

	

					},320)

	

				},300)

	

			})		

	

		}()

		void function () {

			/*招聘表单*/

			if (!$('.fixed_forms').length) return;

			require.async(['mCustomScrollbar', 'mCustomScrollbar.css'], function () {

				$('.cvlist').mCustomScrollbar({});

			})

			$('.join_box a.apply').click(function () {

				var a = $(this).attr('data-id');

				$('.fixed_forms .mains .cvlist form select[name="jobid"]').children().each(function (i) {

					let ops = $(this).val();

					if (a == ops) {

						$(this).attr('selected', 'selected');

					}

				})

				$('.fixed_forms').fadeIn();

				$('body').css({ 'overflow': 'hidden' })

				setTimeout(function () {

					$('.fixed_forms .mains').removeClass('mains_on');

				}, 250)

			})



			$(document).on('click', '.fixed_forms .mains .close_', function () {

				$('.fixed_forms .mains').addClass('mains_on');

				setTimeout(function () {

					$('.fixed_forms').fadeOut();

					$('.fixed_forms .mains .cvlist form select[name="jobid"]').children().removeAttr('selected')

					$('body').css({ 'overflow': '' })

				}, 280);

			})

			$(document).on('click', '.fixed_forms', function (event) {

				var _con = $('.fixed_forms .mains');

				if (!_con.is(event.target) && _con.has(event.target).length === 0) {

					$('.fixed_forms .mains').addClass('mains_on');

					setTimeout(function () {

						$('.fixed_forms').fadeOut();

						$('.fixed_forms .mains .cvlist form select[name="jobid"]').children().removeAttr('selected')

						$('body').css({ 'overflow': '' })

					}, 280);

				}

			});

		}()

		void function () {

			var Accordion = function (el, multiple) {

				this.el = el || {};

				this.multiple = multiple || false;



				// Variables privadas

				var links = this.el.find('.link');

				// Evento

				links.on('click', {

					el: this.el,

					multiple: this.multiple

				}, this.dropdown)

			}



			Accordion.prototype.dropdown = function (e) {

				var $el = e.data.el;

				$this = $(this),

					$next = $this.next();



				$next.slideToggle();

				$this.parent().toggleClass('opens');



				if (!e.data.multiple) {

					$el.find('.submenu').not($next).slideUp().parent().removeClass('opens');

				};

			}

			var accordion = new Accordion($('.accordion'), false);

		}()



		void function () {

			if (!$('.example-image-link').length) return;

			require.async(['lightbox', 'lightbox.css'], function () { })

			/*<a class="example-image-link" href="[pics:src]" data-lightbox="example-set" data-title="[pics:duotutitle]" >

				<img class="example-image" src="[pics:src]" title="[pics:duotutitle]" alt="[pics:duotutitle]" />

			*/

		}()

		void function ()//载入fancybox图片放大插件

		{

			var x = $('.fancybox')

				, y = $('.fancybox-thumb')

			$(document).on('click', 'a.fancybox,a.fancybox-thumb', function (e) { e.preventDefault() })

			if (!x.length && !y.length) return;

			require.async(['fancybox', 'fancybox.css'], function () {

				x.fancybox()

				if (!y.length) return;

				//相册元素存在则加载相册插件

				require.async(['fancybox-thumbs', 'fancybox-thumbs.css'], function () {

					y.fancybox({

						helpers: {

							thumbs: {

								width: 80,

								height: 120

							}

						}

					});

				})

			})

		}()

	})

})

define('main', function main(load, exports) {

	require = load; load = load.async;

	var $window = exports.$window = $(window)

	var $html = exports.$html = $('html')

	var $body = exports.$body = $('body')

	var $scrollBody = exports.$scrollBody = $().add($html).add($body)

	var $document = exports.$document = $(document)

	exports.getScrollTop = function getScrollTop() {

		return $html.scrollTop() || $body.scrollTop()

	}

})

define('hash_click', function hash_click(load, exports) {

	require = load; load = load.async;

	var $document = require('./main').$document

	var $scrollBody = require('./main').$scrollBody

	/**

	 * @param {JQueryEventObject} e 

	 */

	function listener(e) {

		/**@type {HTMLAnchorElement} */

		var _this = this

		if (0

			|| !_this.hash

			|| _this.href.replace(_this.hash, '') !== location.href.replace(location.hash, '')

		) {

			return

		}

		/**@type {number} */

		var position

		if (/\#top/.test(_this.hash)) {

			position = 0

		} else {

			var ele = $(_this.hash)

			if (ele.length) {

				position = ele.offset().top

			}

		}

		if (typeof position === 'number') {

			e.preventDefault()

			$scrollBody.stop(true).animate({ scrollTop: position })

		}

	}

	$document.on('click.anchor', 'a', listener)

})

seajs.use('hash_click')