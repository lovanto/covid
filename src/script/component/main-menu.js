class MainMenu extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div id="right-area">
                <div class="header mb-3">Search for Country's Data Update</div>

                <select-country></select-country>

                <div class="card bg-light mb-3">
                    <div class="card-body" id="conChart">
                        <canvas id="myChart"></canvas>
                    </div>
                </div>

                <div class="card bg-light mb-3">
                    <div class="card-body">
                        <div class="detail">
                            <span class="header-menu">Detail Covid Effects in <span id="countryDetail"></span></span>
                            <div class="sub mt-4 row">
                                <div class="col-md-3 header-detail mb-3 green" align="center">
                                    <div class="mb-3 recovered"></div>
                                    <span id="detailRec" class="mt-1"></span><br>Recovered
                                </div>
                                <div class="col-md-3 header-detail mb-3 orange" align="center">
                                    <div class="mb-3 confirmed"></div>
                                    <span id="detailCon"></span><br>Confirmed
                                </div>
                                <div class="col-md-3 header-detail mb-3 red" align="center">
                                    <div class="mb-3 deaths"></div>
                                    <span id="detailDea"></span><br>Deaths
                                </div>
                                <div class="col-md-3 header-detail mb-3" align="center">
                                    <div class="mb-3 total"></div>
                                    <span id="detailTot" class="mt-1"></span><br>Total Cases
                                </div>
                            </div>
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

customElements.define("main-menu", MainMenu);