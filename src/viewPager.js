const btnIndo = document.getElementById("btnIndo");
const btnGlobal = document.getElementById("btnGlobal");

const pageIndo = document.getElementById("indoShowcase");
const pageGlobal = document.getElementById("globalShowcase");
const pageProvince = document.getElementById("menu-province");
const pageDaily = document.getElementById("menu-daily");
const pageWeekly = document.getElementById("menu-weekly");
const pageMonthly = document.getElementById("menu-monthly");

pageIndo.style.display = 'block';
pageGlobal.style.display = 'none';
pageDaily.style.display = 'none';
pageWeekly.style.display = 'none';
pageMonthly.style.display = 'none';

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

showProvince = () => {
    pageProvince.style.display = 'block';
    pageDaily.style.display = 'none';
    pageWeekly.style.display = 'none';
    pageMonthly.style.display = 'none';
    btnProvince.classList.add('active');
    btnDaily.classList.remove('active');
    btnWeekly.classList.remove('active');
    btnMonthly.classList.remove('active');
}

showDaily = () => {
    pageProvince.style.display = 'none';
    pageDaily.style.display = 'block';
    pageWeekly.style.display = 'none';
    pageMonthly.style.display = 'none';
    btnProvince.classList.remove('active');
    btnDaily.classList.add('active');
    btnWeekly.classList.remove('active');
    btnMonthly.classList.remove('active');
}

showWeekly = () => {
    pageProvince.style.display = 'none';
    pageDaily.style.display = 'none';
    pageWeekly.style.display = 'block';
    pageMonthly.style.display = 'none';
    btnProvince.classList.remove('active');
    btnDaily.classList.remove('active');
    btnWeekly.classList.add('active');
    btnMonthly.classList.remove('active');
}

showMonthly = () => {
    pageProvince.style.display = 'none';
    pageDaily.style.display = 'none';
    pageWeekly.style.display = 'none';
    pageMonthly.style.display = 'block';
    btnProvince.classList.remove('active');
    btnDaily.classList.remove('active');
    btnWeekly.classList.remove('active');
    btnMonthly.classList.add('active');
}