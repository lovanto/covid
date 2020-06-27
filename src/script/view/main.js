import DataSource from '../data/data-sources.js';

const main = () => {
    // get date today
    let today = new Date(), yesterday = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    yesterday = mm + '-' + (dd-2) + '-' + yyyy;
    today = mm + '-' + dd + '-' + yyyy;

    // init
    const searchElement = document.querySelector("select-country");
    const mainMenu = document.querySelector("main-menu");

    const onButtonSearchClicked = () => {
        searchCountry(searchElement.value);
    };

    const searchCountry = async (keyword) => {
        try {
            const result = await DataSource.specificCountry(keyword);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    }

    const renderResult = results => {
        mainMenu.render;
    };

    const fallbackResult = message => {
        mainMenu.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;

    // DATA GLOBAL
    DataSource.dataGlobal();
    DataSource.dataSummary(yesterday);
    DataSource.specificCountry('Indonesia'); //default data selected
    document.getElementById('date').innerHTML = today;

    // DATA INDONESIA
    DataSource.dataIndonesia();
    DataSource.dataProvince();
};

export default main;