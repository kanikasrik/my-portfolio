const darkModeBtn = document.getElementById("darkModeBtn");
const message = document.getElementById("message");
darkModeBtn.addEventListener("click",function() {
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.toggle("dark-mode")) {
        message.textContent = "🌙 Dark Mode ON";
    } else {
        message.textContent = "🌞Light Mode ON";
    }
});
const topBtn = document.getElementById("topBtn");
topBtn.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});
window.addEventListener("scroll",function() {
    if (window.scrollY >200){
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");
window.addEventListener("scroll",function() {
    let current = "";
    sections.forEach(function(section) {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight){
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach(function(link){
        link.classList.remove("active");
        if (link.getAttribute("href") == "#" + current) {
            link.classList.add("active");
        }
    });
});
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("✅ Thankyou for contacting me!");
        contactForm.reset();
});
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();
const typing = document.getElementById("typing");

const text = "Python Developer | Web Development Learner";

let i = 0;

function typeEffect() {
    if (i < text.length) {
        typing.textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, 80);
    }
}
typeEffect();

window.addEventListener("scroll",function() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
     document.getElementById("progressBar").style.width = scrollPercent + "%";
});
const cards = document.querySelectorAll(".project-card");
window.addEventListener("scroll", function(){
    cards.forEach(function(card){
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop<window.innerHeight-100){
            card.classList.add("show");
        }
    });
});
const progressBars = document.querySelectorAll("progress");
window.addEventListener("load", function() {
    progressBars.forEach(function(bar){
        const value = bar.value;
        bar.value = 0;
        let i = 0;
        const interval=setInterval(function() {
            if (i>= value) {
                clearInterval(interval);
            } else {
                i++;
                bar.value=i;
            }
        }, 15);
    });
});