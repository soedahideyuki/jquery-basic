$(function(){
  /*fadeout fadein
  $('#fadeOut').on('click', function(){
    $('.box').fadeOut();
    $('セレクタ').fadeOut(秒,関数);
    $('.box').fadeOut(3000 , function(){
      alert('fadeOut完了');
    });
  });

  $('#fadeIn').on('click', function(){
    $('.box').fadeIn();
  });*/

  $('#fadeToggle').on('click' , function(){
    $('.box').fadeToggle();
  });
});