class BoxComponent extends HTMLElement
{
    items;
    label;
    image;
    isFilled;

    constructor()
    {
        super();
        this.addEventListener('click', () => {this.isFilled = true;})
        this.isFilled = false;
    }


    connectedCallback() {
        this.className = 'open bottom-left';
        this.addLabel();
        //ga eens weg!
        
        let finisher = document.getElementById('box-finisher');
        finisher.addTrackedBox(this);
    }


    static get observedAttributes() {
        return ['isFilled'  /* array of attribute names to monitor for changes */];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(name);
        if(name == 'isFilled' && newValue == true){
            this.dispatchEvent(new Event('filled'))
            this.addLabel();
            this.close();
        }
    }

    addLabel(){
        this.label = document.createElement('label-component');
        this.appendChild(this.label);
    }

    close(){
        this.className = 'closed bottom-left';
    }

}

customElements.define('box-component', BoxComponent);