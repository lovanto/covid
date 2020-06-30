class SideMenu extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div id="left-area">
                <div class="header-menu" style="color: rgb(33, 43, 54);">Global Cases</div>

                <div class="card text-white bg-success mb-3 mt-3">
                    <div class="card-body">
                        <h5 class="card-title">Recovered</h5>
                        <div class="row">
                            <div class="col-md-8" style="font-size: 30px;"><span id="recovered"></span><p class="sub-script">(<span id="pRecovered"></span>%)</p></div>
                            <div class="col-md-4"><span id="percentRecovered"></span> from yesterday</div>
                        </div>
                    </div>
                </div>

                <div class="card text-white bg-warning mb-3">
                    <div class="card-body">
                        <h5 class="card-title">Confirmed</h5>
                        <div class="row">
                            <div class="col-md-8" style="font-size: 30px;"><span id="confirmed"></span><p class="sub-script">(<span id="pConfirmed"></span>%)</p></div>
                            <div class="col-md-4"><span id="percentConfirmed"></span> from yesterday</div>
                        </div>
                    </div>
                </div>

                <div class="card text-white bg-danger mb-3">
                    <div class="card-body">
                        <h5 class="card-title">Death</h5>
                        <div class="row">
                            <div class="col-md-8" style="font-size: 30px;"><span id="deaths"></span><p class="sub-script">(<span id="pDeaths"></span>%)</p></div>
                            <div class="col-md-4"><span id="percentDeaths"></span> from yesterday</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("side-menu", SideMenu);