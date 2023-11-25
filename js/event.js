/* 一つのイベント処理
$(function(){
  // クリックされた場合
  $('button').on('click',function(){ //アロー関数使える？
    console.log('ボタンがクリックされました');
  });
});  //.offの使い道 */

/* 複数のイベント処理
$(function(){
  $('div').on({
    // クリックで背景赤、テキストをクリック
    'click':()=>{
      $('div').css('background-color','red');
      $('div').text('click');
    },
    // ダブルクリックで背景緑、テキストをダブルクリック
    'dblclick':()=>{
      $('div').css('background-color','green');
      $('div').text('dblclick');
    },
    // マウスで右クリックで背景青、テキストをマウスエンター
    'mouseenter':()=>{
      $('div').css('background-color','blue');
      $('div').text('mouseenter');
    },
    'mouseout':()=>{
      $('div').css('background-color','gray');
      $('div').text('mouseout');
    },
  });
});              */ 


$(function(){
  $(document).on('click keydown',(e)=>{
    // クリックされたとき
    if(e.type==='click'){
      $('div').text('クリックされました！');
    }
    if(e.type==='keydown'){
      $('div').text('キーが押されました！');
    }
  });
});