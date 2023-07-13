let togglebtn = document.querySelector(".tbtn");
let nav = document.querySelector(".menubar");
togglebtn.addEventListener("click",function(){
    nav.classList.toggle("nav-toggle"); 
} )     

let closebtn=document.querySelector(".cbtn");
closebtn.addEventListener("click",function(){
    nav.classList.remove("nav-toggle");
})
