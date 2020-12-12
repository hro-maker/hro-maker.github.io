const btn =document.querySelector('.btn-open'),
close =document.querySelector('.btn-close'),
        decr=document.querySelector('.document_descr');

        close.addEventListener('click',()=>{
            decr.style.display="none"}) 
    btn.addEventListener('click',()=>{
        decr.style.display="block"})    
    