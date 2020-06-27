import 'bootstrap';
import 'chart.js';
import 'regenerator-runtime';

import 'datatables.net-bs4';
import 'datatables.net-autofill-bs4';
import 'datatables.net-buttons-bs4';
import 'datatables.net-colreorder-bs4';
import 'datatables.net-fixedcolumns-bs4';
import 'datatables.net-fixedheader-bs4';
import 'datatables.net-keytable-bs4';
import 'datatables.net-rowgroup-bs4';
import 'datatables.net-rowreorder-bs4';
import 'datatables.net-responsive-bs4';
import 'datatables.net-scroller-bs4';
import 'datatables.net-searchpanes-bs4';
import 'datatables.net-select-bs4';

import "./assets/font/Nexa.woff";
import "./assets/font/SFProDisplay-Regular.woff";
import "./assets/scss/style.scss";
import "./assets/img/confirmed.png";
import "./assets/img/deaths.png";
import "./assets/img/recovered.png";
import "./assets/img/virusTotal.png";

import "./script/component/header-navigation.js"
import "./script/component/main-menu.js"
import "./script/component/main-menu-indo.js"
import "./script/component/side-menu.js"
import "./script/component/side-menu-indo.js"
import "./script/component/select-country.js"
import "./viewPager.js"

import main from "./script/view/main.js";

document.addEventListener("DOMContentLoaded", main);