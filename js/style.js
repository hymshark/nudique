$(function () {
    setTimeout(function () {
        $('.loadeing').delay(3500).slideUp(700);
    });//.loading setTimeout()
    
    window.addEventListener('scroll', () => {
        let header = document.querySelector('header');
        let scrollBar = window.scrollY;
        if (scrollBar > 0) {
            header.classList.add('active');}
            else {
                header.classList.remove('active');
            };
    });//window.scroll()
    $(window).scroll(function(){
        let scrollBar = $(window).scrollTop();
        if(scrollBar > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    });//window.scroll()//헤더고정
    $('.header .bg').stop().height($('.depth02').height() + 80);
    $('.nav-pc .gnb > li, .bg').mouseenter(function(){
        $('.depth02').stop().slideDown();
        $('.header .bg').stop().slideDown();
    });//mouseenter
    $('.nav-pc .gnb > li, .bg').mouseleave(function(){
        $('.depth02').stop().slideUp();
        $('.header .bg').stop().slideUp();
    });//mouseleave()

    $('.search_btn').click(function(){
        $('.header').css({
            'background-color' : '#ffffff58' ,
            'backdrop-filter' : 'blur(3px)',
            'backdrop-filter' : 'brightness(.9)',
            'backdrop-filter' : 'opacity(100%)'
        });
        $(this).siblings('.search').slideToggle();
        $('.search_btn').css({
            'display' : 'none'
        }).siblings('.close_btn').css({
            'display' : 'block'
        });
    });//click()

    $('.close_btn').click(function(){
        $('.header').css({
            'background-color' : 'transparent',
        });
        $('.header').hover(function(){
            $(this).css('background-cololr','#fff'),
            $(this).css({'backdrop-filter':'blur(3px)',
                    'backdrop-filter' : 'brightness(.9)',
                    'backdrop-filter' : 'opacity(100%)'
                })}
        );
        $(this).siblings('.search').slideToggle();
        $('.close_btn').css({
            'display' : 'none'
        }).siblings('.search_btn').css({
            'display' : 'block'
        });
    });//close_btn.click()
    


    let bestWidth = $('.best_image').width();
    $('.best_wrap').width(bestWidth * 2);
    $('.best_wrap .item_image').width(bestWidth);

    $('.best_nav_image').click(function(){
        $('.best_nav_image').removeClass('active');
        $(this).addClass('active');

        $('.best_right_wrap .right_explain').removeClass('active');
        $('.right_explain').eq($(this).index()).addClass('active');
        
        


        let imageIndex = $(this).index();
        $('.best_image').stop().animate({
            'margin-left' : -bestWidth * imageIndex
        },700);//animate()

    });//click()


/* slide swiper 슬라이드 스와이퍼 */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
      
});

var swiper02 = new Swiper(".mySwiper.mySwiper02", {
    slidesPerView: 2.5,
    watchSlidesProgress: true,
    loop: true,
    spaceBetween: 24,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
    //top_btn
    let topBtn = $('.top_btn');
    topBtn.click(function(){
    $('html, body').animate({
        scrollTop : 0
    },1500,'easeInOutCubic');//animate()
    });//click()
    
    //topBtn 푸터 위에서 멈추기
    let footerHei = $('footer').outerHeight(); //푸터 순수내부 높이+패딩+보더
    $(window).on('scroll', function(){
        let scrollTop = $(window).scrollTop();
        let val = $(document).height() - $(window).height() - (footerHei + 90);

        if (scrollTop >= val){
            $('.top_btn').addClass('on')
        }else {
            $('.top_btn').removeClass('on')
        }
    });//scroll()  



});//script end