class SideMenuIndo extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div id="left-area">
                <div class="header-menu" style="color: rgb(33, 43, 54);">SUMMARY</div>

                <div class="card text-white bg-success mb-3 mt-3">
                    <div class="card-body">
                        <h5 class="card-title">Recovered</h5>
                        <div class="row">
                            <div class="col-md-8" style="font-size: 30px;"><span id="indoRec"></span><p class="sub-script">(<span id="pRecoveredIndo"></span>%)</p></div>
                            <div class="col-md-4"><span id="percentRecoveredIndo"></span> from yesterday</div>
                        </div>
                    </div>
                </div>

                <div class="card text-white bg-warning mb-3">
                    <div class="card-body">
                        <h5 class="card-title">Confirmed</h5>
                        <div class="row">
                            <div class="col-md-8" style="font-size: 30px;"><span id="indoCon"></span><p class="sub-script">(<span id="pConfirmedIndo"></span>%)</p></div>
                            <div class="col-md-4"><span id="percentConfirmedIndo"></span> from yesterday</div>
                        </div>
                    </div>
                </div>

                <div class="card text-white bg-danger mb-3">
                    <div class="card-body">
                        <h5 class="card-title">Death</h5>
                        <div class="row">
                            <div class="col-md-8" style="font-size: 30px;"><span id="indoDea"></span><p class="sub-script">(<span id="pDeathsIndo"></span>%)</p></div>
                            <div class="col-md-4"><span id="percentDeathsIndo"></span> from yesterday</div>
                        </div>
                    </div>
                </div>

                <div class="card text-white bg-dark mb-3">
                    <div class="card-body">
                        <h5 class="card-title">Total Cases</h5>
                        <div class="row">
                            <div class="col-md-8" style="font-size: 30px;"><span id="indoTot"></span><p class="sub-script">(<span id="pTotalIndo"></span>%)</p></div>
                            <div class="col-md-4"><span id="percentTotalIndo"></span> from yesterday</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("side-menu-indo", SideMenuIndo);