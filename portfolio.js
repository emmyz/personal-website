const manageBtn = document.getElementById("manage-btn");
const bookmarkBtn = document.getElementById("bookmark-btn");
const insureBtn = document.getElementById("insure-btn");
const fyloBtn = document.getElementById("fylo-btn");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");

manageBtn.addEventListener("click", ()=>{
    location.href = "./gituser.html"
})
bookmarkBtn.addEventListener("click", ()=>{
    location.href = "./splitter.html"
})
insureBtn.addEventListener("click", ()=>{
    location.href = "./skilled.html"
})
fyloBtn.addEventListener("click", ()=>{
    location.href = "./components.html"
})
