let plus=document.querySelector('.plus');
let minus=document.querySelector('.minus');
let h1=document.querySelector('h1');
let count=0;
plus.addEventListener('click',()=>{
h1.innerHTML=++count;
})

minus.addEventListener('click',()=>{
    h1.innerHTML=--count;
    })
    