let tooglebtn=document.querySelector(".tbtn");
let nav = document.querySelector(".navbar")
let icon = document.querySelector(".fa-bars")
tooglebtn.addEventListener("click" ,function(){
    nav.classList.toggle("nav-toggle");
    if(nav.classList.contains("nav-toggle")==true){
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-close")
    }else{
        icon.classList.remove("fa-close")
        icon.classList.add("fa-bars")
    }
})