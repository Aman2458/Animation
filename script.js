const img = document.querySelector("img");
const cursor = document.querySelector("#cursor");

img.addEventListener("mousemove",function(dets){
     const rotx = 58 - dets.x/11;
     const roty = Math.abs(rotx);
    
     img.style.transform = `rotateX(${-rotx}deg) rotateY(${roty}deg)`
})



img.addEventListener("mouseleave",function(dets){
  setTimeout(function(){
  },1000)
    img.style.transform = `rotateX(10deg) rotateY(1deg)`
  
})

document.addEventListener ("mousemove",function(dets){
   cursor.style.top = `${dets.y}px`
   cursor.style.left = `${dets.x}px`
})