import 'bootstrap';
import 'chart.js';
import 'regenerator-runtime';
import 'datatables.net-responsive-bs4';

import "./assets/font/Nexa.woff";
import "./assets/font/SFProDisplay-Regular.woff";
import "./assets/scss/style.scss";
import "./assets/img/confirmed.png";
import "./assets/img/deaths.png";
import "./assets/img/recovered.png";
import "./assets/img/virusTotal.png";

import "./script/component/header-navigation.js"
import "./script/component/main-menu.js"
import "./script/component/main-menu-daily.js"
import "./script/component/main-menu-weekly.js"
import "./script/component/main-menu-monthly.js"
import "./script/component/main-menu-province.js"
import "./script/component/select-country.js"
import "./script/component/side-menu.js"
import "./viewPager.js"

import main from "./script/view/main.js";

document.addEventListener("DOMContentLoaded", main);