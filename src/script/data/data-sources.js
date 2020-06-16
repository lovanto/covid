class DataSource {

    static dataGlobal() {
        fetch(`https://covid19.mathdro.id/api`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                console.log(responseJson);

                document.getElementById('lastUpdate').innerHTML = responseJson.lastUpdate;
                document.getElementById('confirmed').innerHTML = new Intl.NumberFormat('ja-JP').format(responseJson.confirmed.value);
                document.getElementById('recovered').innerHTML = new Intl.NumberFormat('ja-JP').format(responseJson.recovered.value);
                document.getElementById('deaths').innerHTML = new Intl.NumberFormat('ja-JP').format(responseJson.deaths.value);
            })
            .catch(error => {
                console.log(error);
            });
    }

}

export default DataSource;