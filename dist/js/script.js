function resize() {
	w_w = $(window).width();
	w_h = $(window).height();
	if( w_w > 768){ //десктоп
	}else{//мобильник
	}
}

$(window).scroll(function(){
	if( $(window).scrollTop() > 210) {
		if( $(window).width() > 768 ){}else{}
	}else{}
});

$(window).on("resize",function(){
    resize();
});

$(document).ready(function() {

	resize();

	$(".services-nav__item").mouseenter(function() {
		var dataRel = $(this).attr("data-rel");

		$(".services-nav__item").removeClass("active");
		$(this).addClass("active");

		$(".services-item").hide();
		$(".services-item").removeClass("active");

		$(".services-item__image--0, .services-item__image--1, .services-item__image--2, .services-item__image--3, .services-item__image--4, .services-item__image--5").css("bottom", "0");

		$(".services-item[data-rel='"+dataRel+"']").stop(true,true).animate({opacity: "show"}, 1000).addClass("active");

		$(".services-item.active .services-item__image.services-item__image--0").stop(true,true).animate({bottom: "180px"}, 1000);
		$(".services-item.active .services-item__image.services-item__image--1").stop(true,true).animate({bottom: "150px"}, 900);
		$(".services-item.active .services-item__image.services-item__image--2").stop(true,true).animate({bottom: "120px"}, 800);
		$(".services-item.active .services-item__image.services-item__image--3").stop(true,true).animate({bottom: "90px"}, 700);
		$(".services-item.active .services-item__image.services-item__image--4").stop(true,true).animate({bottom: "60px"}, 500);
		$(".services-item.active .services-item__image.services-item__image--5").stop(true,true).animate({bottom: "30px"}, 600);
	});
	$(".services-nav__item").mouseleave(function() {
	});


	$(".menu-opener").click(function() {//открытие меню
		$(".menu-sidebar").addClass("menu-sidebar__open");
		$("body").addClass("pos-fix");
	});
	$(".menu-sidebar .close-button").click(function() {//закрытие меню
		$(".menu-sidebar").removeClass("menu-sidebar__open");
		$("body").removeClass("pos-fix");
	});

	$('.media-block').slick({//слайдер на главной
        slidesToShow: 1,
		slidesToScroll: 1,
        dots:false,
        arrows: true,

    });



    /*------ анимация ------*/

    $('.animate-top, .animate-bottom, .animate-left, .animate-right').addClass("hidden-anim").viewportChecker({
		classToAdd: 'visible-anim',
		offset: 100,
	});

    /*------ /анимация ------*/

});

