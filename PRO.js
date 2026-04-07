//Nav Bar fuction
$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');

    });

    $(window).on('scroll load',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');


    if($(window).scrollTop() >  30){
        $('header').addClass('header-active');
    }else{
         $('header').removeClass('header-active');

    }
    });
});

// LOADER
window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});

// HERO TEXT ANIMATION
$(document).ready(function () {
    const words = $("#hero-text .word");

    words.each(function (index) {
        $(this).delay(index * 400).animate(
            {
                opacity: 1,
                top: 0
            },
            600
        ).css("transform", "translateY(0)");
    });
});

// TYPING EFFECT HERO TEXT
const texts = [
    "Stay Safe, Stay Healthy.",
    "Your Health Is Our Priority.",
    "We Care For Your Life.",
    "Quality Healthcare For Everyone."
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isDeleting = false;

(function type() {
    if (count === texts.length) count = 0;

    currentText = texts[count];

    if (isDeleting) {
        letter = currentText.slice(0, --index);
    } else {
        letter = currentText.slice(0, ++index);
    }

    document.getElementById("typing-text").textContent = letter;

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && letter.length === currentText.length) {
        speed = 1500;
        isDeleting = true;
    } else if (isDeleting && letter.length === 0) {
        isDeleting = false;
        count++;
        speed = 500;
    }

    setTimeout(type, speed);
})();

// SCROLL REVEAL
function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// COUNTER ANIMATION
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    counter.innerText = "0";

    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const c = +counter.innerText;

        const increment = target / 100;

        if(c < target){
            counter.innerText = Math.ceil(c + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});

// REVIEW SLIDER
let indexx = 0;
const reviews = document.querySelectorAll(".review .box");

function showReviews(){
    reviews.forEach((box, i) => {
        box.style.display = "none";
    });

    indexx++;
    if(indexx > reviews.length){ indexx = 1 }

    reviews[indexx - 1].style.display = "block";

    setTimeout(showReviews, 3000);
}

// showReviews();

// DARK MODE
const darkBtn = document.getElementById("dark-mode");

darkBtn.onclick = () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        darkBtn.classList.remove("fa-moon");
        darkBtn.classList.add("fa-sun");
    }else{
        darkBtn.classList.remove("fa-sun");
        darkBtn.classList.add("fa-moon");
    }
};