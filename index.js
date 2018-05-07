function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
}

//function increaseRankBy(n){
  
//}

function deepestChild(){
  const start = document.getElementById('grand');
  console.log(start);
  return start;
  
}