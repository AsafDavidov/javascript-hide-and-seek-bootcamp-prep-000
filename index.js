function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n){
  const li = document.getElementById('app').querySelector('ul.ranked-list');
  console.log(li);
  
  for (let i = 0; i < li.length; i++) {
  li[i].innerHTML = (i + 1).toString()
}

function deepestChild(){
  const start = document.getElementById('grand-node');
  //const output;
   
  return start;
  
}