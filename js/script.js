var burger=document.getElementById('burger');

burger.addEventListener('click', burgerOpen);

function burgerOpen(){
    var menu=document.getElementById('menu');
    menu.classList.toggle('open');
    burger.classList.toggle('open');
}