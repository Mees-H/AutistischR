class AppComponent extends HTMLElement
{
    constructor()
    {
        super();
    }

    connectedCallback() {
        let flexbox = document.createElement("div");
        flexbox.className = "flexbox bottom";
        let belt = document.createElement("div");
        belt.className = "con-belt";
        let button = document.createElement("button");
        button.id = "btnStop";
        button.className = "btn";
        button.textContent = "Stop";
        button.onclick = function(){stopAnimation(belt, button)};
        flexbox.appendChild(belt);
        flexbox.appendChild(button);
        this.appendChild(flexbox);
    }
    
}

function stopAnimation(belt, button) {
    if (belt.style.animationPlayState == 'paused') {
        belt.style.animationPlayState = 'running';
        button.textContent = "Stop";
        for (let i = 0; i < document.getElementsByTagName("box-component").length; i++) {
            document.getElementsByTagName("box-component").item(i).style.animationPlayState = 'running';
        }
    }
    else {
        belt.style.animationPlayState = 'paused';
        button.textContent = "Start"
        for (let i = 0; i < document.getElementsByTagName("box-component").length; i++) {
            document.getElementsByTagName("box-component").item(i).style.animationPlayState = 'paused';
        }
        
    }
}

customElements.define('belt-component', AppComponent);