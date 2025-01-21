$(function(){
    //공통스타일 연결 (헤더, 푸터, top버튼)
    $('.header').load('../common/header.html');//경로는 sub01.html을 기준으로 함
    $('.footer').load('../common/footer.html');
    
    //.slide_menu 탭메뉴
    $('.list li').click(function(){
        console.log($(this).index()); 
        $('.list li').removeClass('active');
        $(this).addClass('active');
        $('.tab> div').removeClass('active');
        $('.tab> div').eq($(this).index()).addClass('active');
    });
//top_btn
  let topBtn = $('.top_btn');
  topBtn.click(function(){
    $('html, body').animate({
        scrollTop : 0
    },1500,'easeInOutCubic');//animate()
  });//click()
  let footerHei = $('footer').outerHeight(); //푸터 순수내부 높이+패딩+보더
    $(window).on('scroll', function(){
        let scrollTop = $(window).scrollTop();
        let val = $(document).height() - $(window).height() - footerHei;
        let subOnCss = {
            'position' : 'absolute',
            'bottom' : '600px'
        }
        let subOnCssD = {
            'position' : '',
            'bottom' : ''
        }
        if (scrollTop >= val){
            $('.top_btn').addClass('subon').css(subOnCss);

        }else {
            $('.top_btn').removeClass('subon').css(subOnCssD);
        }
    });//scroll() 

});//script end