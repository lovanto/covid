let globConfirmed = 0,
    globRecovered = 0,
    globDeaths = 0;

class DataSource {

    static dataGlobal() {
        fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(responseJson => {

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
                        labels: ["Recovered", "Confirmed", "Deaths"],
                        datasets: [{
                            backgroundColor: ["#28a745", "#ffc107", "#dc3545"],
                            data: [recovered, confirmed, deaths]
                        }]
                    },
                    options: {
                        legend: {
                            display: false
                        },
                        tooltips: {
                            enabled: false
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

                let code = `
                <table id="dtOrderExample" class="table table-striped table-bordered bg-light">
                <thead>
                    <tr>
                        <th>Provinsi
                        </th>
                        <th>Recovered
                        </th>
                        <th>Confirmed
                        </th>
                        <th>Death
                        </th>
                    </tr>
                </thead>
                <tbody>
                `;

                let recovered = 0;
                let confirmed = 0;
                let deaths = 0;

                let grandRecovered = 0;
                let grandConfirmed = 0;
                let grandDeaths = 0;

                for (let i = 0; i < responseJson.data.length - 1; i++) {
                    recovered = responseJson.data[i].kasusSemb;
                    confirmed = responseJson.data[i].kasusPosi;
                    deaths = responseJson.data[i].kasusMeni;

                    grandRecovered = Number(grandRecovered + recovered);
                    grandConfirmed = Number(grandConfirmed + confirmed);
                    grandDeaths = Number(grandDeaths + deaths);

                    code += `<tr>
                                <td>${responseJson.data[i].provinsi}</td>
                                <td>${new Intl.NumberFormat('ja-JP').format(recovered)}</td>
                                <td>${new Intl.NumberFormat('ja-JP').format(confirmed)}</td>
                                <td>${new Intl.NumberFormat('ja-JP').format(deaths)}</td>
                            </tr>`;
                }

                code += `
                    </tbody>
                </table>
                `;

                // set data
                document.getElementById("dataProvince").innerHTML = code;

                // call and set dataTable
                $(document).ready(function () {
                    $('#dtOrderExample').DataTable({
                        responsive: true
                    });
                });
            })
            .catch(error => console.log(error));
    }

    static dataIndoPer() {
        return fetch(`https://indonesia-covid-19.mathdro.id/api/harian`)
            .then(response => response.json())
            .then(responseJson => {

                let day = [];
                let recovered = [];
                let confirmed = [];
                let deaths = [];
                let incare = [];
                let totalData = responseJson.data.length - 1;
                let totalData7 = responseJson.data.length - 8;
                let totalData30 = responseJson.data.length - 31;

                recovered[0] = responseJson.data[totalData].jumlahPasienSembuh;
                confirmed[0] = responseJson.data[totalData].jumlahKasusKumulatif;
                deaths[0] = responseJson.data[totalData].jumlahPasienMeninggal;
                incare[0] = responseJson.data[totalData].jumlahpasiendalamperawatan;

                recovered[1] = responseJson.data[totalData - 1].jumlahPasienSembuh;
                confirmed[1] = responseJson.data[totalData - 1].jumlahKasusKumulatif;
                deaths[1] = responseJson.data[totalData - 1].jumlahPasienMeninggal;
                incare[1] = responseJson.data[totalData - 1].jumlahpasiendalamperawatan;

                const todayRecovered = Number(recovered[0] - recovered[1]);
                const todayConfirmed = Number(confirmed[0] - confirmed[1]);
                const todayDeaths = Number(deaths[0] - deaths[1]);
                const todayInCare = Number(incare[0] - incare[1]);

                document.getElementById('recoveredTotal').innerHTML = new Intl.NumberFormat('ja-JP').format(recovered[0])
                document.getElementById('confirmedTotal').innerHTML = new Intl.NumberFormat('ja-JP').format(confirmed[0])
                document.getElementById('deathsTotal').innerHTML = new Intl.NumberFormat('ja-JP').format(deaths[0])
                document.getElementById('incCareTotal').innerHTML = new Intl.NumberFormat('ja-JP').format(incare[0])

                document.getElementById('recoveredDetail').innerHTML = new Intl.NumberFormat('ja-JP').format(todayRecovered)
                document.getElementById('confirmedDetail').innerHTML = new Intl.NumberFormat('ja-JP').format(todayConfirmed)
                document.getElementById('deathsDetail').innerHTML = new Intl.NumberFormat('ja-JP').format(todayDeaths)
                document.getElementById('incCareDetail').innerHTML = new Intl.NumberFormat('ja-JP').format(todayInCare)

                let ctx1 = document.getElementById('1DaysChart').getContext('2d');
                new Chart(ctx1, {
                    type: 'pie',
                    data: {
                        labels: ["Recovered", "Confirmed", "Deaths", "In Care"],
                        datasets: [{
                            backgroundColor: ["#28a745", "#ffc107", "#dc3545", "#0067bf"],
                            data: [todayRecovered, todayConfirmed, todayDeaths, todayInCare]
                        }]
                    },
                    options: {
                        title: {
                            display: true,
                            fontSize: 15,
                            text: `Today Data from Covid-19`
                        }
                    }
                });

                day = [];
                recovered = [];
                confirmed = [];
                deaths = [];
                incare = [];

                for (let i = 0; i <= 7; i++) {
                    let date = new Date(Number(responseJson.data[totalData7].tanggal));
                    let dd = String(date.getDate()).padStart(2, '0');
                    let mm = String(date.getMonth() + 1).padStart(2, '0');
                    let yyyy = date.getFullYear();
                    date = dd + '-' + mm + '-' + yyyy;
                    day[i] = date;
                    
                    recovered[i] = responseJson.data[totalData7].jumlahKasusSembuhperHari;
                    confirmed[i] = responseJson.data[totalData7].jumlahKasusBaruperHari;
                    deaths[i] = responseJson.data[totalData7].jumlahKasusMeninggalperHari;
                    incare[i] = responseJson.data[totalData7].jumlahKasusDirawatperHari;
                    totalData7++;
                }

                let ctxRec = document.getElementById('7DaysChartRecovered').getContext('2d');
                new Chart(ctxRec, {
                    type: 'line',
                    data: {
                        labels: day,
                        datasets: [{
                            label: "Recovered",
                            borderColor: "#28a745",
                            data: recovered,
                            fill: false,
                            lineTension: 0
                        }]
                    },
                    options: {
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    drawOnChartArea: false
                                }
                            }],
                            yAxes: [{
                                gridLines: {
                                    drawOnChartArea: false
                                }
                            }]
                        },
                        title: {
                            display: false
                        }
                    }
                });

                let ctxCon = document.getElementById('7DaysChartConfirmed').getContext('2d');
                new Chart(ctxCon, {
                    type: 'line',
                    data: {
                        labels: day,
                        datasets: [{
                            label: "Confirmed",
                            borderColor: "#ffc107",
                            data: confirmed,
                            fill: false,
                            lineTension: 0
                        }]
                    },
                    options: {
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    drawOnChartArea: false
                                }
                            }],
                            yAxes: [{
                                gridLines: {
                                    drawOnChartArea: false
                                }
                            }]
                        },
                        title: {
                            display: false
                        }
                    }
                });

                let ctxDeaths = document.getElementById('7DaysChartDeaths').getContext('2d');
                new Chart(ctxDeaths, {
                    type: 'line',
                    data: {
                        labels: day,
                        datasets: [{
                            label: "Deaths",
                            borderColor: "#dc3545",
                            data: deaths,
                            fill: false,
                            lineTension: 0
                        }]
                    },
                    options: {
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    drawOnChartArea: false
                                }
                            }],
                            yAxes: [{
                                gridLines: {
                                    drawOnChartArea: false
                                }
                            }]
                        },
                        title: {
                            display: false
                        }
                    }
                });

                let ctxInCare = document.getElementById('7DaysChartInCare').getContext('2d');
                new Chart(ctxInCare, {
                    type: 'line',
                    data: {
                        labels: day,
                        datasets: [{
                            label: "In Care",
                            borderColor: "#0067bf",
                            data: incare,
                            fill: false,
                            lineTension: 0
                        }]
                    },
                    options: {
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    drawOnChartArea: false
                                }
                            }],
                            yAxes: [{
                                gridLines: {
                                    drawOnChartArea: false
                                }
                            }]
                        },
                        title: {
                            display: false
                        }
                    }
                });
                
                day = [];
                recovered = [];
                confirmed = [];
                deaths = [];
                incare = [];

                for (let i = 0; i <= 30; i++) {
                    let date = new Date(Number(responseJson.data[totalData30].tanggal));
                    let dd = String(date.getDate()).padStart(2, '0');
                    let mm = String(date.getMonth() + 1).padStart(2, '0');
                    let yyyy = date.getFullYear();
                    date = dd + '-' + mm + '-' + yyyy;
                    day[i] = date;
                    
                    recovered[i] = responseJson.data[totalData30].jumlahKasusSembuhperHari;
                    confirmed[i] = responseJson.data[totalData30].jumlahKasusBaruperHari;
                    deaths[i] = responseJson.data[totalData30].jumlahKasusMeninggalperHari;
                    incare[i] = responseJson.data[totalData30].jumlahKasusDirawatperHari;
                    totalData30++;
                }
                let ctx30Rec = document.getElementById('30DaysChartRecovered').getContext('2d');
                new Chart(ctx30Rec, {
                    type: 'line',
                    data: {
                        labels: day,
                        datasets: [{
                            label: "Recovered",
                            borderColor: "#28a745",
                            data: recovered,
                            fill: false,
                            lineTension: 0
                        }]
                    },
                    options: {
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    drawOnChartArea: false
                                }
                            }],
                            yAxes: [{
                                gridLines: {
                                    drawOnChartArea: false
                                }
                            }]
                        },
                        title: {
                            display: false
                        }
                    }
                });

                let ctx30Con = document.getElementById('30DaysChartConfirmed').getContext('2d');
                new Chart(ctx30Con, {
                    type: 'line',
                    data: {
                        labels: day,
                        datasets: [{
                            label: "Confirmed",
                            borderColor: "#ffc107",
                            data: confirmed,
                            fill: false,
                            lineTension: 0
                        }]
                    },
                    options: {
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    drawOnChartArea: false
                                }
                            }],
                            yAxes: [{
                                gridLines: {
                                    drawOnChartArea: false
                                }
                            }]
                        },
                        title: {
                            display: false
                        }
                    }
                });

                let ctx30Deaths = document.getElementById('30DaysChartDeaths').getContext('2d');
                new Chart(ctx30Deaths, {
                    type: 'line',
                    data: {
                        labels: day,
                        datasets: [{
                            label: "Deaths",
                            borderColor: "#dc3545",
                            data: deaths,
                            fill: false,
                            lineTension: 0
                        }]
                    },
                    options: {
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    drawOnChartArea: false
                                }
                            }],
                            yAxes: [{
                                gridLines: {
                                    drawOnChartArea: false
                                }
                            }]
                        },
                        title: {
                            display: false
                        }
                    }
                });

                let ctx30InCare = document.getElementById('30DaysChartInCare').getContext('2d');
                new Chart(ctx30InCare, {
                    type: 'line',
                    data: {
                        labels: day,
                        datasets: [{
                            label: "In Care",
                            borderColor: "#0067bf",
                            data: incare,
                            fill: false,
                            lineTension: 0
                        }]
                    },
                    options: {
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    drawOnChartArea: false
                                }
                            }],
                            yAxes: [{
                                gridLines: {
                                    drawOnChartArea: false
                                }
                            }]
                        },
                        title: {
                            display: false
                        }
                    }
                });
            })
            .catch(error => console.log(error));
    }
}

export default DataSource;