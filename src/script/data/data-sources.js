let globConfirmed = 0,
    globRecovered = 0,
    globDeaths = 0;

class DataSource {

    static dataGlobal() {
        fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);

                globConfirmed = responseJson.confirmed.value;
                globRecovered = responseJson.recovered.value;
                globDeaths = responseJson.deaths.value;

                document.getElementById('lastUpdate').innerHTML = responseJson.lastUpdate;
                document.getElementById('confirmed').innerHTML = new Intl.NumberFormat('ja-JP').format(globConfirmed);
                document.getElementById('recovered').innerHTML = new Intl.NumberFormat('ja-JP').format(globRecovered);
                document.getElementById('deaths').innerHTML = new Intl.NumberFormat('ja-JP').format(globDeaths);
                document.getElementById('total').innerHTML = new Intl.NumberFormat('ja-JP').format(globConfirmed+globRecovered+globDeaths);
            })
            .catch(error => console.log(error));
    }

    static dataSummary(date) {
        fetch(`https://covid19.mathdro.id/api/daily/${date}`)
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);

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
                document.getElementById('pTotal').innerHTML = new Intl.NumberFormat('ja-JP').format(pConfirmed+pRecovered+pDeaths);
                document.getElementById('percentConfirmed').innerHTML = new Intl.NumberFormat('ja-JP').format(confirmed);
                document.getElementById('percentRecovered').innerHTML = new Intl.NumberFormat('ja-JP').format(recovered);
                document.getElementById('percentDeaths').innerHTML = new Intl.NumberFormat('ja-JP').format(deaths);
                document.getElementById('percentTotal').innerHTML = new Intl.NumberFormat('ja-JP').format(confirmed+recovered+deaths);
            })
            .catch(error => console.log(error));
    }

    static specificCountry(country) {
        return fetch(`https://covid19.mathdro.id/api/countries/${country}`)
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);

                const dateInput = document.getElementById('date').innerHTML;
                const recovered = responseJson.recovered.value;
                const confirmed = responseJson.confirmed.value;
                const deaths = responseJson.deaths.value;

                document.getElementById('countryDetail').innerHTML = country;
                document.getElementById('detailRec').innerHTML = new Intl.NumberFormat('ja-JP').format(recovered);
                document.getElementById('detailCon').innerHTML = new Intl.NumberFormat('ja-JP').format(confirmed);
                document.getElementById('detailDea').innerHTML = new Intl.NumberFormat('ja-JP').format(deaths);
                document.getElementById('detailTot').innerHTML = new Intl.NumberFormat('ja-JP').format(recovered+confirmed+deaths);

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
                    duration: 3000,
                    easing: 'easeOutBounce'
                });
            })
            .catch(error => console.log(error));
    }
}

export default DataSource;