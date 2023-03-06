class Item{
    text;
    url;   

    constructor(text, url){
        this.text = text;
        this.url = url;
    }
}

class ListComponent extends HTMLElement {
    Items = new Array();

    constructor() 
    {
        super();

    }

    connectedCallback() {
        this.Items.push(new Item('Meeseeks box', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Frickandmorty.fandom.com%2Fwiki%2FMr._Meeseeks_Box&psig=AOvVaw2ankUdTFqQTDQGZpgYfNYp&ust=1678179349141000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNCW8LH3xv0CFQAAAAAdAAAAABAE'));
        this.Items.push(new Item('Pickle Rik', 'https://m.media-amazon.com/images/M/MV5BNTllNjZhMzUtNWVhZS00OWU3LWEzY2ItZmQ3MWY5OTBjMDVkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg'));

        let h1 = document.createElement('h1');
        h1.innerText = 'Item List'
        this.appendChild(h1);

        let container = document.createElement('div');
    
        this.Items.forEach(item => {
            let linkItem = document.createElement("p");
            linkItem.innerText = item.text
            linkItem.style.padding = "4px";
            linkItem.style.border = "solid 1px";
            linkItem.style.backgroundColor = "gray";
            linkItem.addEventListener("click",activate)
            container.appendChild(linkItem);
            let hr = document.createElement("hr");
            container.appendChild(hr)
        });


        function activate() {

        //  let pipe = document.getElementById("pipey");
        //  pipe.generateIngredient(this.Items[1].url);
        }

        this.appendChild(container);


        //hier verder niet naar kijken please....
        // this.addEventListener('onStatusChange', () => {
        //     let empties = this.querySelectorAll('li:empty')
        //     empties.forEach(e => e.remove());
        // })
    }
    
}
customElements.define('list-component', ListComponent);

