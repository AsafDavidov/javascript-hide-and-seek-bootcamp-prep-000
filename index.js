function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n){
  const li = document.getElementById('app').querySelectorAll('ul.ranked-list');
  
  for (let i = 0; i < li.length; i++) {
    li[i].innerHTML = (parseInt(i + n)).toString()
  }
}

function deepestChild(){
  const start = document.getElementById('grand-node').querySelectorAll('div')
  
  return start;
  
}