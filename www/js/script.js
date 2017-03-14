/*var w_h = $(window).height(), //высота окна
	w_w = $(window).width(), //ширина окна
	d_st = $(window).scrollTop(), //скролл окна
	//d_h = $(document).height(),
	hb_h = $(".header_block").height(), //высота хедера
	m_h = $(".main").height(), //высота мэйна
	nb_h = $(".news-block").outerHeight(); //высота новостей*/

function resize() {
	w_w = $(window).width();
	w_h = $(window).height();
	if( w_w > 768){ //десктоп
		//menu
		$('ul.menu-list li').hover(function () {
			clearTimeout($.data(this,'timer'));
			$('ul.menu-list__second',this).stop(true,true).slideDown(200);
		}, function () {
			$.data(this,'timer', setTimeout($.proxy(function() {
				$('ul.menu-list__second',this).stop(true,true).slideUp(200);
			}, this), 100));
		});
	    if( $(".advantages-block").hasClass('slick-initialized') ) { $(".advantages-block").slick('unslick'); }
	    if( $(".product-slide__catcolor").hasClass('slick-initialized') ) { $(".product-slide__catcolor").slick('unslick'); }
	}else{//мобильник
		$(".advantages-block").slick({
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 2,
			dots: false,
			arrows: true,
		});
		$(".advantages-block").css("height","auto");
		$(".product-slide__catcolor").slick({
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 2,
			dots: false,
			arrows: true,
		});
		$(".product-slide__catcolor").css("height","auto");
	}
}

$(window).scroll(function(){
	//скролл соц.блока, блока в биографии
	if( $(window).scrollTop() > 210) {
		if( $(window).width() > 768 ){
			$(".bio-avatar").addClass("bio-avatar__fixed");
		}else{
			$(".bio-avatar").removeClass("bio-avatar__fixed");
		}
	}else{
		$(".bio-avatar").removeClass("bio-avatar__fixed");
	}

	widthforNews = $(".news-page__header").outerHeight() + $(".header_block").outerHeight();
	if( $(window).scrollTop() > widthforNews ) {
		if( $(window).width() > 768 ){
			$(".social-block").addClass("social-block__fixed");
		}else{
			$(".social-block").removeClass("social-block__fixed");
		}
	}else{
		$(".social-block").removeClass("social-block__fixed");
	}

});

$(window).on("resize",function(){
    resize();
});

$(document).ready(function() {

	$('.header-login').hover(function () {
		clearTimeout($.data(this,'timer'));
		$('.header-login__form',this).stop(true,true).slideDown(200);
	}, function () {
		$.data(this,'timer', setTimeout($.proxy(function() {
			$('.header-login__form',this).stop(true,true).slideUp(200);
		}, this), 100));
	});

	resize();

	$('[data-toggle="tooltip"]').tooltip()

	$(".filter-item__name").click(function() {
		$(this).toggleClass("filter-item__name--open");
		$(this).closest(".filter-item__info").toggle();
	});

	$(".menu-opener-block").click(function() {//открытие меню
		$(".menu-block").toggleClass("menu-block__open");
		$(".menu-opener").toggleClass("menu-opener__open");
		$("body").toggleClass("pos-fix");
	});

	$(".catalog-sidebar .sidebar__name").click(function() {
		$(this).children(".catalog-sidebar__open").toggleClass("catalog-sidebar__open--cl");
		$(this).next(".sidebar__info").toggle();
	});

	$(".price-item__amount-plus").click(function(){
        var $input = $(this).siblings(".price-item__amount-text");
		$input.val(parseInt($input.val()) + 1);
        $input.change();
		return false;
	});
	$(".price-item__amount-minus").click(function(){
		var count = 0;
        var $input = $(this).siblings(".price-item__amount-text");
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
		return false;
	});

	

	$('.media-block').slick({//слайдер на главной
        slidesToShow: 1,
		slidesToScroll: 1,
        dots:true,
        arrows: false,

    });

    $('.product-slide__big').slick({//слайдер продукции
        slidesToShow: 5,
		slidesToScroll: 1,
        dots:false,
        arrows: true,
        responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        }]
    });
    $('.product-slide__catalog').slick({//слайдер продукции
        slidesToShow: 4,
		slidesToScroll: 1,
        dots:false,
        arrows: true,
        responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
          }
        }]
    });

    $('.brand-slide').slick({//слайдер брендов
        slidesToShow: 5,
		slidesToScroll: 1,
        dots:false,
        arrows: true,
        responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        }]
    });


	//slider index
	$('.gallery-block').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
        arrows: false,
        asNavFor: '.gallery-nav',
	});
    $('.gallery-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.gallery-block',
        focusOnSelect: true,
    });


});

