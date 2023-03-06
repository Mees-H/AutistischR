class LabelComponent extends HTMLElement
{
    Image = 'https://live.staticflickr.com/1575/24316809413_73054f981f_c.jpg';
    


    constructor()
    {
        super();
    }


    connectedCallback() {
        this.innerHTML = "test";

    }


    static get observedAttributes() {
        return [ /* array of attribute names to monitor for changes */];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        
    }

}

customElements.define('label-component', LabelComponent);