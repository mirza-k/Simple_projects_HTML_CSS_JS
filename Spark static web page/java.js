window.addEventListener("scroll",()=>{
const scrolled = Math.round(window.scrollY);
var heaeder = document.getElementsByTagName("header")[0];
    if(scrolled >10)
    {
        heaeder.style.opacity = "0.8";
    }
    else
        heaeder.style.opacity = "1";

})