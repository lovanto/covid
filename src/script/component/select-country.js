import DataCountry from '../data/data-countries.json';

class SelectCountry extends HTMLElement {

    connectedCallback() {
        this.render();
    }
 
    render() {
        this.innerHTML = ``;
        let htmlContent = '<select name="country" id="country" class="form-control mb-3" style="width: 50%;margin-left: 25%;">';

        // create option from json
        DataCountry.countries.map((country) => {
            if (country.name !== "Indonesia"){
                htmlContent += `
                    <option value="${country.name}">${country.name}</option>
                `;
            }else{
                htmlContent += `
                    <option value="${country.name}" selected>${country.name}</option>
                `;
            }
        });

        this.innerHTML += htmlContent;
        this.innerHTML += `</select>`;
    }
}

customElements.define("select-country", SelectCountry);