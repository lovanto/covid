class MainMenuProvince extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div id="right-area">
            <div class="card bg-light mb-3">
                <div class="card-body">
                    <div class="table-responsive" id="dataProvince"></div>
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

customElements.define("main-menu-province", MainMenuProvince);