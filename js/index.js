$(function () {
  //skrollr js 기본셋
  let s = skrollr.init({
    edgeStrategy: 'set',
    easing: 'linear'
  });
  //nav 클릭시 메뉴
    let navLi = $(".nav > ul > li");
    navLi.click(function(){
      $(this).find('ul').slideToggle();
    });
    let contact = $(".information > span");
    contact.click(function(){
      $(".information > p").fadeToggle(1000);
    });
});