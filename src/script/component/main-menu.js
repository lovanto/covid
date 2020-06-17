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
        // this.className = "row row-cols-1 row-cols-sm-2 row-cols-md-3";
        // this._items.forEach(item => {
        //     const receipeItemElement = document.createElement("receipe-item");
        //     receipeItemElement.receipe = item;
        //     this.appendChild(receipeItemElement);
        // })
    }
}

customElements.define("main-menu", MainMenu);