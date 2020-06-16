// import '../component/receipe-category.js';
// import '../component/receipe-list.js';
// import '../component/search-bar.js';
// import '../component/dropdown-sort.js';

import DataSource from '../data/data-sources.js';

const main = () => {
    // get date today
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = mm + '-' + (dd-1) + '-' + yyyy;

    DataSource.dataGlobal();
    DataSource.dataSummary(today);
};

export default main;