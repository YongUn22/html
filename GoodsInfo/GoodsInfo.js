let commentBtn = document.getElementById('commentBtn');
let commentInput = document.getElementById('inputcomment');
let count = [];

function submit(){
    if(commentInput.value !=''){
        const box = document.getElementById('commentList');

        const comments = document.createElement("div");
        comments.className = 'comment';
        const userName = document.createElement("span");
        const mainText = document.createElement("p");
        const hr = document.createElement("hr");

        userName.innerHTML = " jinseon ";
        mainText.innerText = commentInput.value;

        comments.appendChild(userName);
        comments.appendChild(mainText);
        comments.appendChild(hr);
        box.appendChild(comments);

    }
}

commentBtn.addEventListener('click', (e)=>{
    submit();
    commentInput.value = "";
});

let recentBtn = document.getElementById('recent');
let textList = [];
let imgList = [];

recentBtn.addEventListener('click',function(){
    let side = document.getElementById('side');
    
    textList.push("레드데드리뎀션2");
    imgList.push("image/레데리2.jpg");
    textList.push("스타듀밸리");
    imgList.push("image/스타듀밸리.jpg");
    textList.push("산나비");
    imgList.push("image/산나비.jpg");
    textList.push("v라이징");
    imgList.push("image/v라이징.jpg");
    textList.push("스트레이");
    imgList.push("image/스트레이.jpg");
    side.innerHTML = `<ul>`;
    for(let i=0; i< textList.length; i++)
    {
        side.innerHTML += `<li style="list-style-type:none; color:white; margin:10px 20px">${textList[i]}`;
        side.innerHTML += `<a href="#" class="recentA" name=""><img src="${imgList[i]}" alt="" style="width:200px; margin:10px 20px;">`;
        side.innerHTML += `</a></li>`;
    }
    side.innerHTML += `</ul><br>`;
    side.innerHTML += `<button id="closeBtn">닫기</button>`;

    document.getElementById('closeBtn').addEventListener('click',closeBtn);
    textList.splice(0,textList.length);
    imgList.splice(0,imgList.length); 
});

function closeBtn(){
    let side = document.getElementById('side');
    side.innerHTML = "";
}