// je recupere le header dans le document 
let header = document.querySelector("header")
// je recupere aussi la baniere :
let ban = document.querySelector(".banniere")

// j'ecoute le scroll : 
window.addEventListener("scroll",()=>{
    console.log("j'ai scrollé")
    if(window.scrollY > ban.clientHeight - 100){
        header.classList.add("headerColored")
    }else{
        header.classList.remove("headerColored")
    }
})

AOS.init();