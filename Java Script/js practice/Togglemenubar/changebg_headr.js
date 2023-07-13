function changebg_header(){
    // let changebg = document.getElementById("headertop");
    let changebg = document. querySelector("header")
    let current = window.scrollY;
    if(current>0){
        changebg.classList.add("header_fixed")
    }else{
        changebg.classList.remove("header_fixed")
    } 
}
window.addEventListener("scroll",changebg_header)