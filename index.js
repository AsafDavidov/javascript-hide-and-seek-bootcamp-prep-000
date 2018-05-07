function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  console.log(document.getElementById('nested').querySelectorAll('target'));
  return document.getElementById('nested').querySelector('target');
}

//function increaseRankBy(n){
  
//}

//function deepestChild(){
  
//}