const button = document.querySelector("button");

button.onclick = function() {
    const aside = document.querySelector("aside");
    const main = document.querySelector("main");

    aside.classList.toggle("show");

    main.classList.toggle("show");
};