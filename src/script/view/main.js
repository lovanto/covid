import DataSource from '../data/data-sources.js';

const main = () => {
    // get date today
    var today = new Date(), yesterday = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    yesterday = mm + '-' + (dd-2) + '-' + yyyy;
    today = mm + '-' + dd + '-' + yyyy;

    // init
    const searchElement = document.querySelector("select-country");
    // const receipeListElement = document.querySelector("#ajwbdl");

    const onButtonSearchClicked = () => {
        searchCountry(searchElement.value);
    };

    const searchCountry = async (keyword) => {
        // loaderElement.style.display = 'block';
        try {
            const result = await DataSource.specificCountry(keyword);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    }

    const renderResult = results => {
        // loaderElement.style.display = 'none';
        receipeListElement.receipes = results;
    };

    const fallbackResult = message => {
        // loaderElement.style.display = 'none';
        receipeListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;

    DataSource.dataGlobal();
    DataSource.dataSummary(yesterday);
    DataSource.specificCountry('Indonesia'); //default data selected
    document.getElementById('date').innerHTML = today;
};

export default main;