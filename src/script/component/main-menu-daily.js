class MainMenuDaily extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="card bg-light mb-3">
            <div class="card-body">
            <div class="row">
                <div class="col-md-7"><canvas id="1DaysChart"></canvas></div>
                <div class="col-md-3">
                    <h4>Total Cases</h4>
                    Recovered : <span id="recoveredTotal"></span>.<br>
                    Confirmed : <span id="confirmedTotal"></span>.<br>
                    Deaths : <span id="deathsTotal"></span>.<br>
                    In Care : <span id="incCareTotal"></span>.<br><br>
                    <h4>Detail Case Today</h4>
                    Recovered : <span id="recoveredDetail"></span>.<br>
                    Confirmed : <span id="confirmedDetail"></span>.<br>
                    Deaths : <span id="deathsDetail"></span>.<br>
                    In Care : <span id="incCareDetail"></span>.
                </div>
            </div>
            </div>
        </div>
        `;
    }

    renderError(message) {
        this.innerHTML = `
        <style>
            .placeholder {
                font-weight: lighter;
                color: rgba(0,0,0,0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                text-align: center;
            }
        </style>
        
        <h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define("main-menu-daily", MainMenuDaily);