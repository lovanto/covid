let globConfirmed = 0,
    globRecovered = 0,
    globDeaths = 0;

class DataSource {

    static dataGlobal() {
        fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(responseJson => {
                // console.log(responseJson);

                globConfirmed = responseJson.confirmed.value;
                globRecovered = responseJson.recovered.value;
                globDeaths = responseJson.deaths.value;

                document.getElementById('lastUpdate').innerHTML = responseJson.lastUpdate;
                document.getElementById('confirmed').innerHTML = new Intl.NumberFormat('ja-JP').format(globConfirmed);
                document.getElementById('recovered').innerHTML = new Intl.NumberFormat('ja-JP').format(globRecovered);
                document.getElementById('deaths').innerHTML = new Intl.NumberFormat('ja-JP').format(globDeaths);
            })
            .catch(error => console.log(error));
    }

    static dataSummary(date) {
        fetch(`https://covid19.mathdro.id/api/daily/${date}`)
            .then(response => response.json())
            .then(responseJson => {
                // console.log(responseJson);

                let confirmed = 0,
                    recovered = 0,
                    deaths = 0;

                for (let i = 0; i < responseJson.length; i++) {
                    confirmed += Number(responseJson[i].confirmed);
                    recovered += Number(responseJson[i].recovered);
                    deaths += Number(responseJson[i].deaths);
                }

                const pConfirmed = ((globConfirmed - confirmed) / confirmed) * 100;
                const pRecovered = ((globRecovered - recovered) / recovered) * 100;
                const pDeaths = ((globDeaths - deaths) / deaths) * 100;

                confirmed = globConfirmed - confirmed;
                recovered = globRecovered - recovered;
                deaths = globDeaths - deaths;

                document.getElementById('pConfirmed').innerHTML = new Intl.NumberFormat('ja-JP').format(pConfirmed);
                document.getElementById('pRecovered').innerHTML = new Intl.NumberFormat('ja-JP').format(pRecovered);
                document.getElementById('pDeaths').innerHTML = new Intl.NumberFormat('ja-JP').format(pDeaths);
                document.getElementById('percentConfirmed').innerHTML = new Intl.NumberFormat('ja-JP').format(confirmed);
                document.getElementById('percentRecovered').innerHTML = new Intl.NumberFormat('ja-JP').format(recovered);
                document.getElementById('percentDeaths').innerHTML = new Intl.NumberFormat('ja-JP').format(deaths);
            })
            .catch(error => console.log(error));
    }

    static specificCountry(country) {
        return fetch(`https://covid19.mathdro.id/api/countries/${country}`)
            .then(response => response.json())
            .then(responseJson => {
                // console.log(responseJson);

                const dateInput = document.getElementById('date').innerHTML;
                const recovered = responseJson.recovered.value;
                const confirmed = responseJson.confirmed.value;
                const deaths = responseJson.deaths.value;

                document.getElementById('countryDetail').innerHTML = country;
                document.getElementById('detailRec').innerHTML = new Intl.NumberFormat('ja-JP').format(recovered);
                document.getElementById('detailCon').innerHTML = new Intl.NumberFormat('ja-JP').format(confirmed);
                document.getElementById('detailDea').innerHTML = new Intl.NumberFormat('ja-JP').format(deaths);

                const ctx = document.getElementById('myChart').getContext('2d');
                const myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: [dateInput],
                        datasets: [{
                            label: "Recovered",
                            backgroundColor: "#28a745",
                            data: [recovered]
                        }, {
                            label: "Confirmed",
                            backgroundColor: "#ffc107",
                            data: [confirmed]
                        }, {
                            label: "Deaths",
                            backgroundColor: "#dc3545",
                            data: [deaths]
                        }]
                    },
                    options: {
                        showTooltips: false,
                        tooltips: {
                            enabled: false
                        },
                        hover: {
                            mode: null
                        },
                        title: {
                            display: true,
                            fontSize: 15,
                            text: `Data Covid-19 in ${country} Today`
                        }
                    }
                });
                myChart.update({
                    duration: 1500,
                    easing: 'easeOutBounce'
                });
            })
            .catch(error => console.log(error));
    }

    // DATA OF INDONESIA
    static dataIndonesia() {
        fetch(`https://indonesia-covid-19-api.now.sh/api`)
            .then(response => response.json())
            .then(responseJson => {
                // console.log(responseJson);

                let meninggal = responseJson.meninggal;
                let sembuh = responseJson.sembuh;
                let perawatan = responseJson.perawatan;
                let jumlah = responseJson.jumlahKasus;

                document.getElementById('indoCon').innerHTML = new Intl.NumberFormat('ja-JP').format(perawatan);
                document.getElementById('indoRec').innerHTML = new Intl.NumberFormat('ja-JP').format(sembuh);
                document.getElementById('indoDea').innerHTML = new Intl.NumberFormat('ja-JP').format(meninggal);
                document.getElementById('indoTot').innerHTML = new Intl.NumberFormat('ja-JP').format(jumlah);
            })
            .catch(error => console.log(error));
    }

    static dataProvince() {
        return fetch(`https://indonesia-covid-19.mathdro.id/api/provinsi`)
            .then(response => response.json())
            .then(responseJson => {
                // console.log(responseJson);

                let code = `
                <table id="dtOrderExample" class="table table-striped table-bordered bg-light">
                <thead>
                    <tr>
                        <th>Code
                        </th>
                        <th>Provinsi
                        </th>
                        <th>Recovered
                        </th>
                        <th>Confirmed
                        </th>
                        <th>Death
                        </th>
                        <th>Total Cases
                        </th>
                    </tr>
                </thead>
                <tbody>
                `;

                let recovered = 0;
                let confirmed = 0;
                let deaths = 0;
                let total = 0;

                let grandRecovered = 0;
                let grandConfirmed = 0;
                let grandDeaths = 0;
                let grandTotal = 0;

                for (let i = 0; i < responseJson.data.length - 1; i++) {
                    recovered = responseJson.data[i].kasusSemb;
                    confirmed = responseJson.data[i].kasusPosi;
                    deaths = responseJson.data[i].kasusMeni;
                    total = Number(recovered + confirmed + deaths);

                    grandRecovered = Number(grandRecovered+recovered);
                    grandConfirmed = Number(grandConfirmed+confirmed);
                    grandDeaths = Number(grandDeaths+deaths);
                    grandTotal = Number(grandTotal+total);

                    code += `<tr>
                                <td>${responseJson.data[i].kodeProvi}</td>
                                <td>${responseJson.data[i].provinsi}</td>
                                <td>${new Intl.NumberFormat('ja-JP').format(recovered)}</td>
                                <td>${new Intl.NumberFormat('ja-JP').format(confirmed)}</td>
                                <td>${new Intl.NumberFormat('ja-JP').format(deaths)}</td>
                                <td>${new Intl.NumberFormat('ja-JP').format(total)}</td>
                            </tr>`;
                }

                code += `
                </tbody>
                    <tfoot>
                        <tr>
                            <th colspan="2">
                                Total
                            </th>
                            <th>
                                ${new Intl.NumberFormat('ja-JP').format(grandRecovered)}
                            </th>
                            <th>
                                ${new Intl.NumberFormat('ja-JP').format(grandConfirmed)}
                            </th>
                            <th>
                                ${new Intl.NumberFormat('ja-JP').format(grandDeaths)}
                            </th>
                            <th>
                                ${new Intl.NumberFormat('ja-JP').format(grandTotal)}
                            </th>
                        </tr>
                    </tfoot>
                </table>
                `;

                document.getElementById("dataProvince").innerHTML = code;

                $(document).ready(function () {
                    $('#dtOrderExample').DataTable({
                        responsive: true
                    });
                });
            })
            .catch(error => console.log(error));
    }
}

export default DataSource;