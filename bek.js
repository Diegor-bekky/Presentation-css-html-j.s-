// LOADER
window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});

// NAV
$('.fa-bars').click(function(){
    $('.navbar').toggleClass('nav-toggle');
});

// DARK MODE
const darkBtn = document.getElementById("dark-mode");

darkBtn.onclick = () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        darkBtn.classList.replace("fa-moon","fa-sun");
    }else{
        darkBtn.classList.replace("fa-sun","fa-moon");
    }
};

// TYPING EFFECT
const text = "Stay Safe, Stay Healthy.";
let i = 0;

function typing(){
    if(i < text.length){
        document.getElementById("typing-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,100);
    }
}
typing();