$(function(){
   $('.header').load('/sub-page/common/header.html'); //스크립트 작성 시 문제 발생됨. 경로부분을 없다고 인식함->경로를 common.js에 연결시켜둔다.
   $('.footer').load('/sub-page/common/footer.html');
});//script end 