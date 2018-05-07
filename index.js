function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n){
  const li = document.getElementById('app').querySelector('ul.ranked-list');
  console.log(li);
}

function deepestChild(){
  const start = document.getElementById('grand-node');
  //const output;
   
  return start;
  
}