

var imgs = Array.from( document.getElementsByClassName("img-item"));
var lightboxcontainer = document.getElementById("lightboxcontainer");
var lightboxitem = document.getElementById("lightboxitem");
var closeIcon = document.getElementById("close");
var prevIcon = document.getElementById("prev");
var nextIcon = document.getElementById("next");
var currentIndex = 0;

for(var i=0;i<imgs.length;i++)
{
    imgs[i].addEventListener("click" , openLightBox)
}
function openLightBox(eventInfo)
{    

     currentIndex = imgs.indexOf(eventInfo.target);//0-5
     console.log(currentIndex);//0

    lightboxcontainer.style.display ="flex";
    var imgSrc = eventInfo.target.src;//image path ely elmosta5dm 3ml 3liha click
    lightboxitem.style.backgroundImage = `url(${imgSrc})`;
}
function slide( x ) {
    currentIndex += x;
    if(currentIndex == imgs.length)
    {
        currentIndex = 0;
    }
    else if(currentIndex < 0)
    {
        currentIndex = imgs.length-1;
    }
    var imgSrc = imgs[currentIndex].src;
    lightboxitem.style.backgroundImage = `url(${imgSrc})`;
  }
  nextIcon.addEventListener("click" , function(){

    slide(1);
});
  prevIcon.addEventListener("click" , function(){
    slide(-1);
});
 








closeIcon.addEventListener("click" , closeLightBox);



function closeLightBox()
{
    lightboxcontainer.style.display ="none";
}

// function nextSlide()
// {
//     currentIndex++;//1
//     if(currentIndex == imgs.length)////6
//     {
//         currentIndex=0;
//     }
//     var imgSrc =  imgs[currentIndex].src;///
//     lightboxitem.style.backgroundImage = `url(${imgSrc})`;
// }


// function prevSlide()
// {
//     currentIndex--;//-1
//     if(currentIndex < 0)
//     {
//         currentIndex = imgs.length - 1;
//     }
//     var imgSrc = imgs[currentIndex].src;
//     lightboxitem.style.backgroundImage = `url(${imgSrc})`;
// }



document.addEventListener("keydown" , function (eventInfo) { 

    if(eventInfo.keyCode == 39)//Arrow Right
    {
        slide(1);
    }
    else if(eventInfo.keyCode == 37)//Arrow Left
    {
        slide(-1);
    }
    else if(eventInfo.keyCode == 27)//ESC
    {
        closeLightBox();
    }
});



// "?" => zero or one
// "*" => zero or more

// "+" => one or more