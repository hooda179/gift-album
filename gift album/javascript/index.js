var coverOut = document.querySelector(".cover-out");
var coverIn = document.querySelector(".cover-in");
var album = document.querySelector(".album");
var end = document.querySelectorAll(".page").length;
var closingPage = document.querySelector(".closing-page");

document.querySelector("body").addEventListener("load",function(){
  album.focus();
})

// identify pages as variables
var page = [""];
for (let i = 1; i < (end -1);i++){
  page.push("page" + i);
}
for (let i = 1; i < (end-1);i++){
  page[i] = document.querySelectorAll(".page")[i+1];
}
// end

// first page flip
function flip1(){
  page[1].classList.toggle("open");
  page[2].classList.toggle("open");
}
// end

// pages flip factor
function flip(first,second,last){
  second.classList.toggle("open");
  last.classList.toggle("open");
  setTimeout(function(){
    first.classList.toggle("hide");
  },500);
}
// end

// cover flip
function forCover(){
  album.classList.toggle("album-open");
  coverOut.classList.toggle("open");
  coverIn.classList.toggle("open");
}
coverOut.addEventListener("click",function(){
  forCover();
});
coverIn.addEventListener("click",function(){
  forCover();
});
// end

// pages flip
page[1].addEventListener("click",flip1);
page[2].addEventListener("click",flip1);

for (let i = 3; i < (end - 2); i+= 2){
  page[i].addEventListener("click",function(){
    flip(page[i-1],page[i],page[i+1]);
  });
  page[i+1].addEventListener("click",function(){
    flip(page[i-1],page[i],page[i+1]);
  });
}
// end


// close the album
page[17].addEventListener("click",function(){
  closingPage.classList.toggle("open");
  album.classList.toggle("album-close");
})
page[18].addEventListener("click",function(){
  setTimeout(function(){
  closingPage.classList.toggle("open");
  },1000);
  album.classList.toggle("album-close");
})
