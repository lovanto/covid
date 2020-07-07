class MainMenuWeekly extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="card bg-light mb-3">
            <div class="card-body row">
                <div class="col-md-6"><canvas id="7DaysChartRecovered"></canvas></div>
                <div class="col-md-6"><canvas id="7DaysChartConfirmed"></canvas></div>
                <div class="col-md-6"><canvas id="7DaysChartDeaths"></canvas></div>
                <div class="col-md-6"><canvas id="7DaysChartInCare"></canvas></div>
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

customElements.define("main-menu-weekly", MainMenuWeekly);