const headname =document.querySelector("#heederName")
const navoptions =document.querySelectorAll(".navopts")

headname.addEventListener("mouseover",()=>{
    headname.innerText ="World of Information" ;
    headname.style.transition = "all 1.5s ease";
    headname.addEventListener("mouseout",()=>{
     headname.innerText ="Duniya e Maloomat" ;
     headname.style.transition = "all 1.5s ease";
    })
})

navoptions.forEach((navoption)=>{
    navoption.addEventListener("mouseover",()=>{
        navoption.style.transition = "all 1.5s ease";
        navoption.style.padding = "0 2rem";
        navoption.style.color ="white";
    navoption.addEventListener("mouseout",()=>{
        navoption.style.transition = "all 1.5s ease";
        navoption.style.color ="black";
        navoption.style.padding = "0";

    })
    })
    
})