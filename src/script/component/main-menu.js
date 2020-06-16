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
                    <div class="card-body">
                        <canvas id="myChart"></canvas>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("main-menu", MainMenu);