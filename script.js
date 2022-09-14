const photos = document.querySelectorAll('img');

let btnRight = document.querySelector('.right');

let btnLeft = document.querySelector('.left');

let imgIndex = 0;
let i = 0;
setInterval(()=>{
    photos[imgIndex].className = '';
    imgIndex++;

    if(imgIndex >= photos.length){
        imgIndex = 0;
    }
    photos[imgIndex].className = 'visible';
},2000) 

/*btnRight.onclick = function(){
    photos[imgIndex].className = '';
    imgIndex++;

    if(imgIndex >= photos.length){
        imgIndex = 0;
    }
    photos[imgIndex].className = 'visible';
}

btnLeft.onclick = function(){
    photos[imgIndex].className = '';
    imgIndex = imgIndex - 1;

    if(imgIndex < 0){
        imgIndex = photos.length - 1;
    }
    photos[imgIndex].className = 'visible';
}
*/



