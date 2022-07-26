const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const menu = document.querySelector(".menu");

const currentLink = document.querySelectorAll('a[href="'+window.location.pathname+'"]');
currentLink.forEach(function(link){
    link.className += 'active';
})

hamburger.addEventListener("click", ()=>{
    hamburger.style.display = "none";
    close.style.display = "block";
    if(close.style.display=="block"){
        console.log("display menu")
        menu.style.display="block";
    }
})
close.addEventListener("click", ()=>{
    hamburger.style.display = "block";
    close.style.display = "none";
    if(close.style.display=="none"){
        menu.style.display="none";
    }
})

