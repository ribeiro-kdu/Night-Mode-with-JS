function changeMode() {
    changeClasses();
    if (body.classList.contains('dark-mode')) {
    h1.innerHTML = "Night Mode On";
    btn.innerHTML = "Light Mode";
} else {
    h1.innerHTML = "Light Mode On";
    btn.innerHTML = "Night Mode";
}
    // console.log('cliquei!');
}

function changeClasses() {
    btn.classList.toggle('dark-mode2');
    h1.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
}

const btn = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

btn.addEventListener('click', changeMode);

