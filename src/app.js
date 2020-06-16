import 'bootstrap';
import 'chart.js';
import "regenerator-runtime";

import "./assets/font/Nexa.woff";
import "./assets/font/SFProDisplay-Regular.woff"
import "./assets/scss/style.scss";

import "./script/component/header-navigation.js"
import "./script/component/main-menu.js"
import "./script/component/side-menu.js"
import "./script/component/select-country.js"

import main from "./script/view/main.js";

document.addEventListener("DOMContentLoaded", main);