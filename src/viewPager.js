const btnIndo = document.getElementById("btnIndo");
const btnGlobal = document.getElementById("btnGlobal");

const pageIndo = document.getElementById("indoShowcase");
const pageGlobal = document.getElementById("globalShowcase");

pageIndo.style.display = 'block';
pageGlobal.style.display = 'none';

showIndoPage = () => {
    pageIndo.style.display = 'block';
    pageGlobal.style.display = 'none';
    btnIndo.classList.add('active');
    btnGlobal.classList.remove('active');
}

showGlobalPage = () => {
    pageIndo.style.display = 'none';
    pageGlobal.style.display = 'block';
    btnIndo.classList.remove('active');
    btnGlobal.classList.add('active');
}