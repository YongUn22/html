let purchaseList = [];
let priceList = [];
let box = document.querySelector('.list');
let boxBtn = document.getElementById('btn');

boxBtn.addEventListener('click',addList);

function addList(){
  purchaseList.push('엘든링');
  purchaseList.push('GTA5');
  purchaseList.push('배틀필드 2042');
  priceList.push('6000');
  priceList.push('7000');
  priceList.push('8000');
  showList();
}

function showList(){
  let price = 0;
  let str = '';
  console.log(purchaseList);

  for(let i=0; i< purchaseList.length;i++){
    str += `<div class="game">`;
    str += `<div class="img"><img src="./image/${i+1}.jpg" alt="#"></div>`;
    str += `<div class="title">${purchaseList[i]}</div>`;
    str += `<div class="price">`;
    str += `<div class="num">￦${(priceList[i])}</div>`;
    str += `<span class="close" id="${i}">안사요</span>`;
    str += `</div>`;
    str += `</div>`;
    price += Number(priceList[i]);
  //   str += price;
  }
  document.getElementById('totalPrice').innerHTML='￦'+price;
  document.getElementById('ttp').innerHTML='￦'+price;
  box.innerHTML = str;
  let ToT=Number(document.getElementById('ToT').innerText);
  console.log(ToT);
  let total=0;
  total=ToT-price;
  
  document.getElementById('spare').innerHTML='￦'+total;

  let closeBtn = document.querySelectorAll('.close');
  for(let i=0; i<closeBtn.length; i++)
  {
    closeBtn[i].addEventListener('click',closeList);
  }
}

function closeList(){
  let id = this.getAttribute('id');
  purchaseList.splice(id,1);
  priceList.splice(id,1);
  showList();
  if(purchaseList.length <= 0){
    box.innerHTML = `<button id="btn">버튼</button>`;
    let boxBtn = document.getElementById('btn');

    boxBtn.addEventListener('click',addList);
  }
}

