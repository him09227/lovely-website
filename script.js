const btn = document.getElementById("startBtn");
const hero = document.getElementById("hero");
const scene2 = document.getElementById("scene2");

btn.onclick = () => {

hero.classList.add("fadeOut");

for(let i=0;i<25;i++){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-50px";

heart.style.animationDuration=2+Math.random()*3+"s";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),5000);

}

setTimeout(()=>{

scene2.classList.add("show");

},800);

};

const stars = document.getElementById("stars");

for(let i=0;i<120;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*2+"s";

stars.appendChild(star);

}
