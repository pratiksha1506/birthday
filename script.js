function openGift(){

let gift=document.getElementById("giftBox");
let blast=document.getElementById("blast");
let content=document.getElementById("content");
let music=document.getElementById("music");

gift.style.display="none";
blast.style.display="block";

/* BIG EXPLOSION PARTICLES */

for(let i=0;i<80;i++){

let particle=document.createElement("div");
particle.className="particle";

let x=(Math.random()-0.5)*900+"px";
let y=(Math.random()-0.5)*900+"px";

particle.style.setProperty("--x",x);
particle.style.setProperty("--y",y);

particle.style.left="50%";
particle.style.top="50%";

document.body.appendChild(particle);

setTimeout(()=>{
particle.remove();
},1200);

}

/* AFTER BLAST SHOW CONTENT */

setTimeout(()=>{
blast.style.display="none";
content.style.display="block";
music.play();

createHearts();
createConfetti();

},1200);

}

/* VIDEO BUTTON */

// function showVideo(){

// let videoSection=document.getElementById("videoSection");
// let video=document.getElementById("video");

// videoSection.style.display="block";
// video.play();

// }
document.getElementById("videoBtn").addEventListener("click", function () {

    window.location.href = "video.html";

});
/* HEARTS */

function createHearts(){

setInterval(function(){

let heart=document.createElement("div");
heart.className="heart";
heart.innerHTML="💜";

heart.style.left=Math.random()*100+"vw";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);

},500);

}

/* CONFETTI */

function createConfetti(){

setInterval(function(){

let confetti=document.createElement("div");
confetti.className="confetti";

let emojis=["🎉","✨","💖","🎊"];

confetti.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

confetti.style.left=Math.random()*100+"vw";

document.body.appendChild(confetti);

setTimeout(()=>{
confetti.remove();
},5000);

},400);

}