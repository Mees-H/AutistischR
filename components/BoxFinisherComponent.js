class BoxFinisherComponent extends HTMLElement
{
trackedBoxes;

    constructor()
    {
        super();
        this.trackedBoxes = [];
    }

    connectedCallback() {
        
    }

    addTrackedBox(box){
        this.id = 'box-finisher';
        this.trackedBoxes.push(box);
        box.addEventListener('filled', () => {alert("WEEEEEEEE")})
    }
    
}

customElements.define('box-finisher-component', BoxFinisherComponent);