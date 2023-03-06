class BoxComponent extends HTMLElement
{
     OpenedImage = ;


    constructor()
    {
        super();
    }


    connectedCallback() {

    }


    static get observedAttributes() {
        return [ /* array of attribute names to monitor for changes */];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        
    }

}

customElements.define('BoxComponent', BoxComponent);