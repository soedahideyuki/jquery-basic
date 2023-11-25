$(function(){ //アロー関数はつかえない？
  /*const title=$('#title').text();  //質問 getElementByIdはつかえない？
  const list=$('.message').text();
  console.log(title);
  console.log(list);*/
  
//class属性値の先頭が「sample」の要素だけを抽出する
const text=$('li[class^="sample"]').text();  //　＊部分一致　^前方一致　$後方一致
console.log(text);
});
