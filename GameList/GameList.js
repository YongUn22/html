let purchaseList = [];
let priceList = [];
let box = document.querySelector('.list');
let boxBtn = document.getElementById('btn');

boxBtn.addEventListener('click',addList);

function addList(){
  purchaseList.push('GTA5<br>Play Time: 0h');
  purchaseList.push('배틀필드 2042<br>Play Time: 0h');
  purchaseList.push('에일리언<br>Play Time: 250h');
  purchaseList.push('피파 22<br>Play Time: 130h');
  purchaseList.push('V RISING<br>Play Time: 30h');
  purchaseList.push('RAFT<br>Play Time: 40h');
  purchaseList.push('스파이더 맨<br>Play Time: 500h');
  purchaseList.push('배틀 그라운드<br>Play Time: 1200h');
  showList();
}

function showList(){

  let str = '';
  console.log(purchaseList);

  for(let i=0; i< purchaseList.length;i++){
    str += `<div class="game">`;
    str += `<div class="img"><img src="image/${i+2}.jpg" alt="#"></div>`;
    str += `<div class="title">${purchaseList[i]}</div>`;
    str += `</div>`;
  }

  box.innerHTML = str;
}
let recentBtn = document.getElementById('recent');
let textList = [];
let imgList = [];

recentBtn.addEventListener('click',function(){
let side = document.getElementById('side');

textList.push("레드데드리뎀션2");
imgList.push("./image/레데리2.jpg");
textList.push("스타듀밸리");
imgList.push("./image/스타듀밸리.jpg");
textList.push("산나비");
imgList.push("./image/산나비.jpg");
textList.push("v라이징");
imgList.push("./image/v라이징.jpg");
textList.push("스트레이");
imgList.push("./image/스트레이.jpg");
side.innerHTML = `<ul>`;
for(let i=0; i< textList.length; i++)
{
  side.innerHTML += `<li style="list-style-type:none; color:white; margin:10px 20px">${textList[i]}`;
  side.innerHTML += `<a href="#" class="recentA" name=""><img src="${imgList[i]}" alt="" style="width:200px; margin:10px 20px;">`;
  side.innerHTML += `</a></li>`;
}
side.innerHTML += `</ul><br>`;
side.innerHTML += `<button id="closeBtn">닫기</button>`;

let clostBtn = document.getElementById('closeBtn').addEventListener('click',closeBtn);
textList.splice(0,textList.length);
imgList.splice(0,imgList.length); 
});

function closeBtn(){
let side = document.getElementById('side');
side.innerHTML = "";
}

