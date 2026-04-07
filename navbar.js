function toggleMenu(){
    let nav =document.getElementById("nav-links");
    let icon = document.getElementById("menuIcon");
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        icon.classList.replace("fa-bars", "fa-xmark");

    }else{
        icon.classList.replace("fa-xmark", "fa-bars");
    }
}
document.querySelectorAll("#nav-links a").forEach(link=>{
    link.addEventListener("click", ()=>{
        document.getElementById("nav-links").classList.remove("active");
        document.getElementById("nav-links").classList.remove("active");
    })
})