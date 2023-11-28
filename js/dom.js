$(function(){
/*テキストの抽出
  const p = $('p').text();
  console.log(p);*/

  /*テキストの追加
  $('html要素').text('追加したいテキスト')
  $('p').text('jQueryを勉強しよう');*/

/*要素の追加、削除
  let num=0;
//id属性がappendの要素がクリックされたら要素を追加
$('#append').on('click',function(){
  num++;
  $('ul').append('<li>appendで追加' + num + '</li>');
});

$('#remove').on('click',function(){
  num--;
  $('li:last').remove();

  if(num < 0){
    num = 0;
  }
});*/

//id属性がshowの要素がクリックされたら要素を表示
$('#show').on('click',function(){
  $('ul').show();
});

//id属性がの要hide素がクリックされたら要素を非表示
$('#hide').on('click',function(){
  $('ul').hide();
});
});