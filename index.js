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
  const start = document.getElementById('grand-node').querySelectorAll('div');
  var output = document.getElementById('grand-node');
  for (var i = 0 ; i < start.length;i++){
    output = output.querySelector('div');
  }
  return output;

}