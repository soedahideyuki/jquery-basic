/*class属性の追加と削除
$(function(){
  $('#add').on('click',function(){
    // id属性がtargetの要素にclass属性'sample'をついか
    $('#target').addClass('sample');
  });
});
$(function(){
  $('#remove').on('click',function(){
    // id属性がtargetの要素にclass属性'sample'をついか
    $('#target').removeClass('sample');
  });
});*/

$(function(){
  $('#toggle').on('click',function(){
    // id属性がtargetの要素にclass属性sampleを追加
    $('#target').toggleClass('sample');
  });

  $('#has').on('click',function(){
    let result=$('#target').hasClass('sample');

    // 条件分岐してconsole.logを表示する
    if(result){  //class属性が取得できれば
      console.log('sampleクラスがあります');
    } else {
      console.log('sampleクラスがありません');
    }
  });
});