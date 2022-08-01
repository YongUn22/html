    const slides = document.querySelector('.slides'); //전체 슬라이드 컨테이너
    const slideImg = document.querySelectorAll('.slides li'); //모든 슬라이드들
    let currentIdx = 0; //현재 슬라이드 index
    const slideCount = slideImg.length; // 슬라이드 개수
    const prev = document.querySelector('.prev'); //이전 버튼
    const next = document.querySelector('.next'); //다음 버튼
    const slideWidth = 1280; //한개의 슬라이드 넓이
    const slideMargin = 100; //슬라이드간의 margin 값
    
    //전체 슬라이드 컨테이너 넓이 설정
    slides.style.width = (slideWidth + slideMargin) * slideCount + 'px';
    function moveSlide(num) {
        slides.style.left = -num * 1380 + 'px';
        currentIdx = num;
    }
    
    prev.addEventListener('click', function () {
        /*첫 번째 슬라이드로 표시 됐을때는 
        이전 버튼 눌러도 아무런 반응 없게 하기 위해 
        currentIdx !==0일때만 moveSlide 함수 불러옴 */
        console.log(currentIdx);
      if (currentIdx !== 0) {
        moveSlide(currentIdx - 1);
      }
    });
    
    next.addEventListener('click', function () {
      /* 마지막 슬라이드로 표시 됐을때는 
      다음 버튼 눌러도 아무런 반응 없게 하기 위해
      currentIdx !==slideCount - 1 일때만 
      moveSlide 함수 불러옴 */
      console.log(currentIdx);
      if (currentIdx !== slideCount - 1) {
        moveSlide(currentIdx + 1);
      }
    });

    let imgList = [];
    let titleList = [];
    let saleList = [];
    let saleDateList = [];
    let priceList = [];
    str = '';

    let fps = document.getElementById('FPS');

    fps.addEventListener('click',main);

    fps.click();

    function main(){

      str = '';
      document.querySelector('.main').innerHTML = '';

      imgList.push("image/sc.jpg");
      titleList.push("MIDWEEK MADNESS");
      saleList.push("-60%");
      saleDateList.push("Offer ends 29 Jul @ 2:00am.");
      priceList.push("₩13,000");
  
      imgList.push("image/game5.jpg");
      titleList.push("MIDWEEK MADNESS");
      saleList.push("-10%");
      saleDateList.push("Offer ends 29 Jun @ 12:00pm.");
      priceList.push("₩36,000");
  
      imgList.push("image/game1.jpg");
      titleList.push("MIDWEEK MADNESS");
      saleList.push("-35%");
      saleDateList.push("Offer ends 29 Dec @ 12:00am.");
      priceList.push("₩22,000");
  
      imgList.push("image/game2.jpg");
      titleList.push("MIDWEEK MADNESS");
      saleList.push("-80%");
      saleDateList.push("Offer ends 1 Oct @ 9:00pm.");
      priceList.push("₩8,000");
  
      imgList.push("image/game3.jpg");
      titleList.push("MIDWEEK MADNESS");
      saleList.push("-20%");
      saleDateList.push("Offer ends 1 Jul @ 2:00am.");
      priceList.push("₩30,000");
  
      imgList.push("image/game4.jpg");
      titleList.push("MIDWEEK MADNESS");
      saleList.push("-30%");
      saleDateList.push("Offer ends 29 Jun @ 12:00am.");
      priceList.push("₩24,000");
  
      for(let i=0; i< imgList.length;i++)
      {
          str += `<a href="/GoodsInfo/GoodsInfo.html">
                  <div>`;
          str += `<img src=${imgList[i]} width="400px" height="350px" alt="">`;
          str += `<h2>${titleList[i]}</h2>`;
          str += `<p>${saleDateList[i]}</p>`;
          str += `<span class="sale">${saleList[i]}</span><span class="won">${priceList[i]}</span>`;
          str += `</div></a>`;
      }

      imgList.splice(0,imgList.length);
      titleList.splice(0, titleList.length);
      saleList.splice(0,saleList.length);
      saleDateList.splice(0,saleDateList.length);
      priceList.splice(0,priceList.length);
  
      document.querySelector('.main').innerHTML = str;
    }

    let fpsBtn = document.getElementById('RPG').addEventListener("click",RPGList);

    function RPGList(){

      str = '';
      document.querySelector('.main').innerHTML = '';

      imgList.push("image/다잉라이트2.jpg");
      titleList.push("MIDWEEK MADNESS");
      saleList.push("-60%");
      saleDateList.push("Offer ends 29 Jul @ 2:00am.");
      priceList.push("₩13,000");
  
      imgList.push("image/마운트앤블레이드.jpg");
      titleList.push("MIDWEEK MADNESS");
      saleList.push("-10%");
      saleDateList.push("Offer ends 29 Jun @ 12:00pm.");
      priceList.push("₩36,000");
  
      imgList.push("image/몬스터헌터.jpg");
      titleList.push("MIDWEEK MADNESS");
      saleList.push("-35%");
      saleDateList.push("Offer ends 29 Dec @ 12:00am.");
      priceList.push("₩22,000");
  
      imgList.push("image/스타듀밸리.jpg");
      titleList.push("MIDWEEK MADNESS");
      saleList.push("-80%");
      saleDateList.push("Offer ends 1 Oct @ 9:00pm.");
      priceList.push("₩8,000");
  
      imgList.push("image/워프레임.jpg");
      titleList.push("MIDWEEK MADNESS");
      saleList.push("-20%");
      saleDateList.push("Offer ends 1 Jul @ 2:00am.");
      priceList.push("₩30,000");
  
      imgList.push("image/문라이터.jpg");
      titleList.push("MIDWEEK MADNESS");
      saleList.push("-30%");
      saleDateList.push("Offer ends 29 Jun @ 12:00am.");
      priceList.push("₩24,000");
  
      for(let i=0; i< imgList.length;i++)
      {
          str += `<a href="/상품정보페이지/GoodsInfo.html">
                  <div>`;
          str += `<img src=${imgList[i]} width="400px" height="350px" alt="">`;
          str += `<h2>${titleList[i]}</h2>`;
          str += `<p>${saleDateList[i]}</p>`;
          str += `<span class="sale">${saleList[i]}</span><span class="won">${priceList[i]}</span>`;
          str += `</div></a>`;
      }
      
      imgList.splice(0,imgList.length);
      titleList.splice(0, titleList.length);
      saleList.splice(0,saleList.length);
      saleDateList.splice(0,saleDateList.length);
      priceList.splice(0,priceList.length);
      
      document.querySelector('.main').innerHTML = str;
    }