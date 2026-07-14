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
const title = "Hey Beautiful ❤️";
const subtitle = "I've been waiting for you... Welcome to this magical little world.";

const typing = document.getElementById("typing");
const sub = document.getElementById("subtitle");
const continueBtn = document.getElementById("continueBtn");

function typeText(text, element, speed, callback){

let i=0;

function type(){

if(i<text.length){

element.innerHTML+=text.charAt(i);

i++;

setTimeout(type,speed);

}else if(callback){

callback();

}

}

type();

}

setTimeout(()=>{

typing.innerHTML="";
sub.innerHTML="";

typeText(title,typing,80,()=>{

typeText(subtitle,sub,35,()=>{

continueBtn.classList.remove("hidden");

});

});

},900);

const proposal = document.getElementById("proposal");

continueBtn.onclick = () => {

scene2.classList.remove("show");

proposal.classList.add("show");

};

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

function moveNoButton(){

    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 80);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

}

const yesBtn = document.getElementById("yesBtn");

yesBtn.onclick = () => {

    confetti({
        particleCount:180,
        spread:90,
        origin:{y:0.6}
    });

    document.body.innerHTML=`
    <div class="success">
        <h1>❤️ Yay! ❤️</h1>
        <h2>You made my day 🥹</h2>
        <p>Thank you for saying Yes!</p>

        <div class="big-heart">💖</div>

        <button onclick="location.reload()">
            Restart Story 🔄
        </button>

    </div>
    `;

};

window.onload = () => {

setTimeout(() => {

document
.getElementById("loader")
.classList.add("hide");

},2000);

};

const cat = document.getElementById("catMascot");

cat.addEventListener("click", ()=>{

    cat.innerHTML="😻";

    setTimeout(()=>{
        cat.innerHTML="🐱";
    },1000);

});

document.addEventListener("click",(e)=>{

    // ❤️ Heart
    const heart=document.createElement("div");
    heart.className="click-heart";
    heart.innerHTML="❤️";
    heart.style.left=e.clientX+"px";
    heart.style.top=e.clientY+"px";
    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },1200);

    // ✨ Sparkles
    for(let i=0;i<6;i++){

        const sparkle=document.createElement("div");

        sparkle.className="sparkle";

        sparkle.innerHTML="✨";

        sparkle.style.left=(e.clientX+(Math.random()*60-30))+"px";

        sparkle.style.top=(e.clientY+(Math.random()*60-30))+"px";

        document.body.appendChild(sparkle);

        setTimeout(()=>{
            sparkle.remove();
        },800);

    }

});

// 🌠 Shooting Star

function createShootingStar(){

    const star=document.createElement("div");

    star.className="shooting-star";

    star.style.left=Math.random()*window.innerWidth+"px";

    star.style.top=Math.random()*200+"px";

    document.body.appendChild(star);

    setTimeout(()=>{
        star.remove();
    },1500);

}

setInterval(createShootingStar,6000);
