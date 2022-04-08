let menu = document.querySelector("#menu");
let toggleOpen = document.querySelector("#toggleOpen");
let toggleClose = document.querySelector("#toggleClose");

toggleOpen.addEventListener('click', () => {
    menu.style.display = 'block';
});

toggleClose.addEventListener('click', () => {
    menu.style.display = 'none';
});