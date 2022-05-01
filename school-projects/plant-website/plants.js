const burgerButton = document.querySelector('header button'); 
const nav = document.querySelector('header nav');

burgerButton.addEventListener('click', () => {
    if(nav.classList.contains('show')){
        nav.classList.remove('show');
        burgerButton.innerHTML = "≡";
    }
    else{
        nav.classList.add('show');
        burgerButton.innerHTML = "&times";
    }
});