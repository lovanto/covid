import DataCountry from '../data/data-countries.json';

class SelectCountry extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = ``;

        let htmlContent = '<select name="country" id="country" class="form-control mb-3" style="width: 50%;margin-left: 25%;">';

        // Categories
        DataCountry.countries.map((country) => {
            htmlContent += `
                <option value="${country.name}">${country.name}</option>
            `;
        });

        this.innerHTML += htmlContent;
        this.innerHTML += `</select>`;
    }
}

customElements.define("select-country", SelectCountry);