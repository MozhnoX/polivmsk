$(document).ready(function() {
	// ЯКОРЯ
	$("body").on('click', '[href*="#"]', function(e){
		var fixed_offset = 0;
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
		e.preventDefault();
	});

	// СПАСИБО ДЛЯ ФОРМ
	$('#backcall-modal input[type="submit"]').on('click', function() {
		event.preventDefault(); 
		$.fancybox.close();
		$.fancybox.open({
			src: '#backcall-thanks-modal'
		});
	});
	$('#consult input[type="submit"]').on('click', function() {
		event.preventDefault(); 
		$.fancybox.close();
		$.fancybox.open({
			src: '#backcall-thanks-modal'
		});
	});
	$('.main-form input[type="submit"]').on('click', function() {
		event.preventDefault(); 
		$.fancybox.close();
		$.fancybox.open({
			src: '#backcall-thanks-modal'
		});
	});
	$('#raschet-modal input[type="submit"]').on('click', function() {
		event.preventDefault(); 
		$.fancybox.close();
		$.fancybox.open({
			src: '#raschet-thanks-modal'
		});
	});
	$('#reviews-modal input[type="submit"]').on('click', function() {
		event.preventDefault(); 
		$.fancybox.close();
		$.fancybox.open({
			src: '#reviews-thanks-modal'
		});
	});
	$('#vacancy-modal input[type="submit"]').on('click', function() {
		event.preventDefault(); 
		$.fancybox.close();
		$.fancybox.open({
			src: '#vacancy-thanks-modal'
		});
	});

	var header = $('#header.with-opacity');  
	$(window).scroll(function() {     
		if ($(window).scrollTop() > 150) {
			header.removeClass('opacity');
		} else {
			header.addClass('opacity');
		}
	});
	var header2 = $('#header');  
	$(window).scroll(function() {     
		if ($(window).scrollTop() > 150) {
			header2.addClass('fix');
		} else {
			header2.removeClass('fix');
		}
	});

	 //FILES
	 if ($('.form-file input').length > 0) {
		setInterval(function () {
			if($('.form-file input').val().length > 0 ){
				$('.form-file .name').text('Файл загружен');
			} else {
			}
		}, 100);
	}
	
	// MASK
	$('.user_phone').inputmask({
		"mask": "+7 (999) 999 99 99"
	});
	
	// MENU
	$('#header-menu__toggle').on('click', function() {
		$('#header-menu__toggle').toggleClass('active');
		$('.header-menu').toggleClass('active');
		$('body').toggleClass('no-scroll');
	});
	
	var swiper = new Swiper(".usl-slider", {
		slidesPerView: "auto",
		spaceBetween: 20,
		loop: true,
		navigation: {
			nextEl: ".usl-slider-nav .next",
			prevEl: ".usl-slider-nav .prev",
		}
	});

	var swiper = new Swiper(".projects-slider", {
		slidesPerView: 1,
		spaceBetween: 20,
		loop: true,
		navigation: {
			nextEl: ".projects-slider-nav .next",
			prevEl: ".projects-slider-nav .prev",
		},
    	breakpoints: {
    		1200: {
    			slidesPerView: 2
    		}
    	}
	});

	var mySwiper = new Swiper(".work-slider", {
		autoHeight: true,
		direction: "horizontal",
		navigation: {
			nextEl: ".work-slider-nav .next",
			prevEl: ".work-slider-nav .prev",
		},
		pagination: {
			el: ".work-slider-pagination .swiper-pagination",
			type: "progressbar"
		},
		loop: false,
		effect: "slide",
		spaceBetween: 30,
		on: {
			init: function () {
				$(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
				$(".swiper-pagination-custom .swiper-pagination-switch").eq(0).addClass("active");
			},
			slideChangeTransitionStart: function () {
				$(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
				$(".swiper-pagination-custom .swiper-pagination-switch").eq(mySwiper.realIndex).addClass("active");
			}
		},
    	breakpoints: {
    		768: {
    			autoHeight: false
    		}
    	}
	});
	$(".swiper-pagination-custom .swiper-pagination-switch").click(function () {
		mySwiper.slideTo($(this).index());
		$(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
		$(this).addClass("active");
		$(".work-slider-item-nav .prev").trigger('click');
	});

	if ($(window).width() < 768) {
		document.querySelectorAll('.work-slider .swiper-slide').forEach(n => {
			var slider = new Swiper(n.querySelector('.work-slider-item'), {
				slidesPerView: 1,
				spaceBetween: 0,
				loop: false,
				autoHeight: true,
				navigation: {
					nextEl: ".work-slider-item-nav .next",
					prevEl: ".work-slider-item-nav .prev",
				},
			});
		});
	}
	if ($(window).width() < 540) {
		setInterval(function () {
			if($(".swiper-pagination-switch:nth-child(1)").hasClass('active')) {
				$(".work-slider-pagination").css("transform", "translateX(calc(0vw))");
			}
			if($(".swiper-pagination-switch:nth-child(2)").hasClass('active')) {
				$(".work-slider-pagination").css("transform", "translateX(calc(-100vw + 86px))");
			}
			if($(".swiper-pagination-switch:nth-child(3)").hasClass('active')) {
				$(".work-slider-pagination").css("transform", "translateX(calc(-100vw - 100vw + 165px))");
			}
			if($(".swiper-pagination-switch:nth-child(4)").hasClass('active')) {
				$(".work-slider-pagination").css("transform", "translateX(calc(-100vw - 100vw + 165px))");
			}
		}, 100);
	}
	$('.work-slider-button .blue-button').on('click', function() {
		if($('.swiper-pagination-switch:nth-child(4)').hasClass('active')) {
			$('.swiper-pagination-switch:nth-child(1)').trigger('click');
		} else {
			$('.swiper-pagination-switch.active + .swiper-pagination-switch').trigger('click');
		}
	});

	var swiper = new Swiper(".reviews-slider", {
		slidesPerView: "auto",
		spaceBetween: 20,
		loop: true,
		navigation: {
			nextEl: ".reviews-slider-nav .next",
			prevEl: ".reviews-slider-nav .prev",
		}
	});

	var swiper = new Swiper(".oborud-slider", {
		slidesPerView: 1.25,
		spaceBetween: 20,
		loop: true,
		navigation: {
			nextEl: ".oborud-slider-nav .next",
			prevEl: ".oborud-slider-nav .prev",
		},
    	breakpoints: {
    		1200: {
    			slidesPerView: 4
    		},
    		1022: {
    			slidesPerView: 3
    		},
    		768: {
    			slidesPerView: 2
    		}
    	}
	});

	const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
	if (isFirefox) {
		if ($(window).width() > 1200 && $(window).width() < 1700) {
	  	var bodywidth = window.innerWidth;
	  	var zoomvalue = window.innerWidth / 1800;
	  	$('body').css('transform', 'scale('+zoomvalue+')');
	  	$('body').css('transform-origin', 'left top');
	  	$('body').css('width', 'calc(100% / '+zoomvalue+')');
	  	$('body').css('height', 'calc(100% / '+zoomvalue+')');
	  	$('body').css('margin-bottom', '-300vw');
	  	window.addEventListener('resize', (e) => {
	  		var bodywidth = window.innerWidth;
	  		var zoomvalue = window.innerWidth / 1800;
	  		$('body').css('transform', 'scale('+zoomvalue+')');
	  		$('body').css('transform-origin', 'left top');
	  		$('body').css('width', 'calc(100% / '+zoomvalue+')');
	  		$('body').css('height', 'calc(100% / '+zoomvalue+')');
	  		$('body').css('margin-bottom', '-300vw');
	  	});
	  }
	} else {
		if ($(window).width() > 1200 && $(window).width() < 1700) {
			var bodywidth = window.innerWidth;
			var zoomvalue = window.innerWidth / 1800;
			$('body').css('zoom', ''+zoomvalue+'');
			window.addEventListener('resize', (e) => {
				var bodywidth = window.innerWidth;
				var zoomvalue = window.innerWidth / 1800;
				$('body').css('zoom', ''+zoomvalue+'');
			});
		}
	}

	// FAQ
	$('.faq-item-button').on('click', function() {
		if($(this).parent().hasClass('active')) {
			$(this).parent().removeClass('active');
		} else {
			$('.faq-item-button').parent().removeClass('active');
			$(this).parent().addClass('active');
		}
	});

	var swiper = new Swiper(".portfolio-in-gallery .thumbs", {
		spaceBetween: 8,
		slidesPerView: 2,
		freeMode: true,
		watchSlidesProgress: true,
		breakpoints: {
			1022: {
				slidesPerView: 4,
				spaceBetween: 17
			},
			540: {
				slidesPerView: 3,
				spaceBetween: 17
			}
		}
	});
	var swiper2 = new Swiper(".portfolio-in-gallery .main", {
		centeredSlides: true,
		effect: "fade",
		slidesPerView: 1,
		loop: false,
		spaceBetween: 0,
		navigation: {
			nextEl: ".portfolio-in-gallery .next",
			prevEl: ".portfolio-in-gallery .prev",
		},
		thumbs: {
			swiper: swiper,
		}
	});

	// VACANCY
	$('.vacancy-item-top').on('click', function() {
		if($(this).parent().hasClass('active')) {
			$(this).parent().removeClass('active');
		} else {
			$('.vacancy-item-top').parent().removeClass('active');
			$(this).parent().addClass('active');
		}
	});

	//PRICE TABS
	$('.price-top-item').on('click', function() {
		$('.price-tabs-item').removeClass('active');
		$('.price-top-item').removeClass('active');
		$(this).addClass('active');
		$('.price-tabs-item[data-value="'+$('.price-top-item.active').attr('data-value')+'"]').addClass('active');
	});
	$('.price-top-item:nth-child(1)').trigger('click');

 });

(function(){var ac={frameRate:350,animationTime:700,stepSize:45,pulseAlgorithm:true,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:true,arrowScroll:50,fixedBackground:true,excluded:""};var I=ac;var G=false;var C=false;var m={x:0,y:0};var b=false;var K=document.documentElement;var h;var R;var t;var ai=[];var i;var ad=/^Mac/.test(navigator.platform);var B={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36};var T={37:1,38:1,39:1,40:1};function am(){if(I.keyboardSupport){k("keydown",H)}}function af(){if(b||!document.body){return}b=true;var e=document.body;var ar=document.documentElement;var au=window.innerHeight;var at=e.scrollHeight;K=(document.compatMode.indexOf("CSS")>=0)?ar:e;h=e;am();if(top!=self){C=true}else{if(X&&at>au&&(e.offsetHeight<=au||ar.offsetHeight<=au)){var ap=document.createElement("div");ap.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+K.scrollHeight+"px";document.body.appendChild(ap);var an;t=function(){if(an){return}an=setTimeout(function(){if(G){return}ap.style.height="0";ap.style.height=K.scrollHeight+"px";an=null},500)};setTimeout(t,10);k("resize",t);var aq={attributes:true,childList:true,characterData:false};R=new L(t);R.observe(e,aq);if(K.offsetHeight<=au){var ao=document.createElement("div");ao.style.clear="both";e.appendChild(ao)}}}if(!I.fixedBackground&&!G){e.style.backgroundAttachment="scroll";ar.style.backgroundAttachment="scroll"}}function d(){R&&R.disconnect();a(S,u);a("mousedown",w);a("keydown",H);a("resize",t);a("load",af)}var V=[];var l=false;var v=Date.now();function ag(ap,ao,at){M(ao,at);if(I.accelerationMax!=1){var e=Date.now();var av=e-v;if(av<I.accelerationDelta){var ar=(1+(50/av))/2;if(ar>1){ar=Math.min(ar,I.accelerationMax);ao*=ar;at*=ar}}v=Date.now()}V.push({x:ao,y:at,lastX:(ao<0)?0.99:-0.99,lastY:(at<0)?0.99:-0.99,start:Date.now()});if(l){return}var au=D();var aq=(ap===au||ap===document.body);if(ap.$scrollBehavior==null&&O(ap)){ap.$scrollBehavior=ap.style.scrollBehavior;ap.style.scrollBehavior="auto"}var an=function(ax){var aw=Date.now();var aE=0;var aD=0;for(var az=0;az<V.length;az++){var aG=V[az];var aF=aw-aG.start;var ay=(aF>=I.animationTime);var aA=(ay)?1:aF/I.animationTime;if(I.pulseAlgorithm){aA=p(aA)}var aC=(aG.x*aA-aG.lastX)>>0;var aB=(aG.y*aA-aG.lastY)>>0;aE+=aC;aD+=aB;aG.lastX+=aC;aG.lastY+=aB;if(ay){V.splice(az,1);az--}}if(aq){window.scrollBy(aE,aD)}else{if(aE){ap.scrollLeft+=aE}if(aD){ap.scrollTop+=aD}}if(!ao&&!at){V=[]}if(V.length){U(an,ap,(1000/I.frameRate+1))}else{l=false;if(ap.$scrollBehavior!=null){ap.style.scrollBehavior=ap.$scrollBehavior;ap.$scrollBehavior=null}}};U(an,ap,0);l=true}function u(ap){if(!b){af()}var aq=ap.target;if(ap.defaultPrevented||ap.ctrlKey){return true}if(s(h,"embed")||(s(aq,"embed")&&/\.pdf/i.test(aq.src))||s(h,"object")||aq.shadowRoot){return true}var an=-ap.wheelDeltaX||ap.deltaX||0;var e=-ap.wheelDeltaY||ap.deltaY||0;if(ad){if(ap.wheelDeltaX&&A(ap.wheelDeltaX,120)){an=-120*(ap.wheelDeltaX/Math.abs(ap.wheelDeltaX))}if(ap.wheelDeltaY&&A(ap.wheelDeltaY,120)){e=-120*(ap.wheelDeltaY/Math.abs(ap.wheelDeltaY))}}if(!an&&!e){e=-ap.wheelDelta||0}if(ap.deltaMode===1){an*=40;e*=40}var ao=Y(aq);if(!ao){if(C&&ah){Object.defineProperty(ap,"target",{value:window.frameElement});return parent.wheel(ap)}return true}if(ak(e)){return true}if(Math.abs(an)>1.2){an*=I.stepSize/120}if(Math.abs(e)>1.2){e*=I.stepSize/120}ag(ao,an,e);ap.preventDefault();r()}function H(e){var au=e.target;var aq=e.ctrlKey||e.altKey||e.metaKey||(e.shiftKey&&e.keyCode!==B.spacebar);if(!document.body.contains(h)){h=document.activeElement}var an=/^(textarea|select|embed|object)$/i;var ao=/^(button|submit|radio|checkbox|file|color|image)$/i;if(e.defaultPrevented||an.test(au.nodeName)||s(au,"input")&&!ao.test(au.type)||s(h,"video")||z(e)||au.isContentEditable||aq){return true}if((s(au,"button")||s(au,"input")&&ao.test(au.type))&&e.keyCode===B.spacebar){return true}if(s(au,"input")&&au.type=="radio"&&T[e.keyCode]){return true}var ap,ay=0,aw=0;var at=Y(h);if(!at){return(C&&ah)?parent.keydown(e):true}var ar=at.clientHeight;if(at==document.body){ar=window.innerHeight}switch(e.keyCode){case B.up:aw=-I.arrowScroll;break;case B.down:aw=I.arrowScroll;break;case B.spacebar:ap=e.shiftKey?1:-1;aw=-ap*ar*0.9;break;case B.pageup:aw=-ar*0.9;break;case B.pagedown:aw=ar*0.9;break;case B.home:if(at==document.body&&document.scrollingElement){at=document.scrollingElement}aw=-at.scrollTop;break;case B.end:var ax=at.scrollHeight-at.scrollTop;var av=ax-ar;aw=(av>0)?av+10:0;break;case B.left:ay=-I.arrowScroll;break;case B.right:ay=I.arrowScroll;break;default:return true}ag(at,ay,aw);e.preventDefault();r()}function w(e){h=e.target}var J=(function(){var e=0;return function(an){return an.uniqueID||(an.uniqueID=e++)}})();var o={};var n={};var ae;var al={};function r(){clearTimeout(ae);ae=setInterval(function(){o=n=al={}},1*1000)}function g(ap,ao,e){var an=e?o:n;for(var aq=ap.length;aq--;){an[J(ap[aq])]=ao}return ao}function j(an,e){return(e?o:n)[J(an)]}function Y(ar){var ao=[];var e=document.body;var an=K.scrollHeight;do{var aq=j(ar,false);if(aq){return g(ao,aq)}ao.push(ar);if(an===ar.scrollHeight){var at=W(K)&&W(e);var ap=at||N(K);if(C&&Z(K)||!C&&ap){return g(ao,D())}}else{if(Z(ar)&&N(ar)){return g(ao,ar)}}}while((ar=ar.parentElement))}function Z(e){return(e.clientHeight+10<e.scrollHeight)}function W(e){var an=getComputedStyle(e,"").getPropertyValue("overflow-y");return(an!=="hidden")}function N(e){var an=getComputedStyle(e,"").getPropertyValue("overflow-y");return(an==="scroll"||an==="auto")}function O(e){var ao=J(e);if(al[ao]==null){var an=getComputedStyle(e,"")["scroll-behavior"];al[ao]=("smooth"==an)}return al[ao]}function k(ao,an,e){window.addEventListener(ao,an,e||false)}function a(ao,an,e){window.removeEventListener(ao,an,e||false)}function s(an,e){return an&&(an.nodeName||"").toLowerCase()===e.toLowerCase()}function M(e,an){e=(e>0)?1:-1;an=(an>0)?1:-1;if(m.x!==e||m.y!==an){m.x=e;m.y=an;V=[];v=0}}if(window.localStorage&&localStorage.SS_deltaBuffer){try{ai=localStorage.SS_deltaBuffer.split(",")}catch(aj){}}function ak(e){if(!e){return}if(!ai.length){ai=[e,e,e]}e=Math.abs(e);ai.push(e);ai.shift();clearTimeout(i);i=setTimeout(function(){try{localStorage.SS_deltaBuffer=ai.join(",")}catch(ap){}},1000);var an=e>120&&F(e);var ao=!F(120)&&!F(100)&&!an;if(e<50){return true}return ao}function A(an,e){return(Math.floor(an/e)==an/e)}function F(e){return(A(ai[0],e)&&A(ai[1],e)&&A(ai[2],e))}function z(ao){var an=ao.target;var e=false;if(document.URL.indexOf("www.youtube.com/watch")!=-1){do{e=(an.classList&&an.classList.contains("html5-video-controls"));if(e){break}}while((an=an.parentNode))}return e}var U=(function(){return(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(ao,an,e){window.setTimeout(ao,e||(1000/60))})})();var L=(window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver);var D=(function(){var e=document.scrollingElement;return function(){if(!e){var ap=document.createElement("div");ap.style.cssText="height:10000px;width:1px;";document.body.appendChild(ap);var ao=document.body.scrollTop;var an=document.documentElement.scrollTop;window.scrollBy(0,3);if(document.body.scrollTop!=ao){(e=document.body)}else{(e=document.documentElement)}window.scrollBy(0,-3);document.body.removeChild(ap)}return e}})();function ab(e){var ao,ap,an;e=e*I.pulseScale;if(e<1){ao=e-(1-Math.exp(-e))}else{ap=Math.exp(-1);e-=1;an=1-Math.exp(-e);ao=ap+(an*(1-ap))}return ao*I.pulseNormalize}function p(e){if(e>=1){return 1}if(e<=0){return 0}if(I.pulseNormalize==1){I.pulseNormalize/=ab(1)}return ab(e)}var Q=window.navigator.userAgent;var aa=/Edge/.test(Q);var ah=/chrome/i.test(Q)&&!aa;var f=/safari/i.test(Q)&&!aa;var c=/firefox/i.test(Q);var P=/mobile/i.test(Q);var y=/Windows NT 6.1/i.test(Q)&&/rv:11/i.test(Q);var X=f&&(/Version\/8/i.test(Q)||/Version\/9/i.test(Q));var x=false;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){x=true}}))}catch(aj){}var E=x?{passive:false}:false;var S="onwheel" in document.createElement("div")?"wheel":"mousewheel";if(S){k(S,u,E);k("mousedown",w);k("load",af)}function q(an){for(var e in an){if(ac.hasOwnProperty(e)){I[e]=an[e]}}}q.destroy=d;if(window.SmoothScrollOptions){q(window.SmoothScrollOptions)}if(typeof define==="function"&&define.amd){define(function(){return q})}else{if("object"==typeof exports){module.exports=q}else{window.SmoothScroll=q}}})();