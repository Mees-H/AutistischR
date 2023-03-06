class PipeComponent extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        let img = document.createElement('img');
        img.src = 'https://cdn.drawception.com/images/panels/2012/4-14/TXKt48mM5m-2.png';
        this.appendChild(img);
        this.generateIngredient("hallo");
    }

    generateIngredient(name){
        let startY = 150;
        let endY = this.offsetHeight;

        let ingredient = document.createElement('div');
        let img = document.createElement('img');
        img.src = name;
        ingredient.className = 'ingredient';
        ingredient.id = 'ingredient';
        ingredient.appendChild(img);
        this.appendChild(ingredient);
        this.move(startY, endY);
    }

    async move(start, end){
        let id = null;
        const elem = document.getElementById("ingredient");   
        let pos = start;
        clearInterval(id);
        id = setInterval(frame, 5);
        function frame() {
            if (pos == end) {
                clearInterval(id);
                let box = document.querySelectorAll('.open')[0];
                box.appendChild(elem);
            } else {
                pos++; 
                elem.style.top = pos + "px"; 
            }
        }
    }
}

customElements.define('pipe-component', PipeComponent);