class AppComponent extends HTMLElement
{
    constructor()
    {
        super();
    }

    connectedCallback(){
        this.count = 1;

        this.intervalId = window.setInterval(() => {
            this.dropBox();
        }, 1000);
    }

    dropBox(){

        let box = document.createElement('div');
        box.className = 'animate';
        this.appendChild(box);

        this.count++;
        console.log(this.count);

        if (this.count > 6) {
            clearTimeout(this.intervalId);
        }
    }
}

customElements.define('my-boxdrop', AppComponent);