function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n){
  const li = document.getElementById('app').querySelector('ul.ranked-list');
  console.log('here');
  
  for (let i = 0; i < li.length; i++) {
    console.log('made it');
    li[i].innerHTML = (parseInt(i + n)).toString()
  }
}

function deepestChild(){
  const start = document.getElementById('grand-node');
  //const output;
   
  return start;
  
}