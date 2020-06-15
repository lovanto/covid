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
                            <div class="col-md-8" style="font-size: 30px;">3,729,054</div>
                            <div class="col-md-4">48% from yesterday</div>
                        </div>
                    </div>
                </div>

                <div class="card text-white bg-warning mb-3">
                    <div class="card-body">
                        <h5 class="card-title">Confirmed</h5>
                        <div class="row">
                            <div class="col-md-8" style="font-size: 30px;">7,820,023</div>
                            <div class="col-md-4">4% from yesterday</div>
                        </div>
                    </div>
                </div>

                <div class="card text-white bg-danger mb-3">
                    <div class="card-body">
                        <h5 class="card-title">Death</h5>
                        <div class="row">
                            <div class="col-md-8" style="font-size: 30px;">430,694</div>
                            <div class="col-md-4">6% from yesterday</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("side-menu", SideMenu);