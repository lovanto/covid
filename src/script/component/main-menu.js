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
        </style>`;
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define("main-menu", MainMenu);