export default class TargetNike extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }
    static get observedAttributes() {
        return ["img", "titleproduct", "price", "description", "collection"];  // atributos del componente
    }
    attributeChangedCallback( attr, oldValue, newVal){
        if ( TargetNike.observedAttributes.includes(attr)){     // para evitar una cadena dde if
            this[attr] = newVal;
        }
    }
    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
        <div class="card-section--preview">
            <span>Nike</span>
            <img src="${this.img}" alt="product image">
        </div>
        <div class="card-section--description">
            <h3 class="description-title">${this.titleproduct}</h3>
            <span class="description-category">${this.collection}</span>
            <p class="description-text">
                ${this.description}
            </p>
            <div class="card-section--price">
                    <span class="description-price">${this.price}</span>
                    <button class="btn-primary">BUY NOW</button>
            </div>
        </div>
        ${this.getStyles()}
        `;
        return template;
    }
    getStyles() {
        return `
        <style>
        :host{
            max-width: 620px;
            height: auto;
            font-family:Arial, Helvetica, sans-serif;
            display: grid;
            grid-template-rows: auto auto;
        }
        .card-section--preview{
            height: auto;
            background-color: #4855a0;
            color: #3f4a8d;
            font-size: 70px;
            font-weight: bold;
        }
        .card-section--preview > span:nth-child(1){
            position: relative;
            left: 30px;
            top: 10px;
        }
        .card-section--preview > img {
            position: relative;
            top : -20px;
            left: -30px;
            width: 100%;
        }
        .card-section--description{
            padding: 24px;
            background-color: white;
        }
        .card-section--description .description-title,
        .card-section--description .description-category{
            display: inline-block;
        }
        .card-section--description .description-title {
            font-size: 32px;
            text-transform: uppercase;
            margin: 10px 10px 10px 0;
        }
        .card-section--description .description-category{
            color: gray;
            text-transform: uppercase;
        }
        .card-section--description .description-text {
            margin: 20px 0;
            line-height: 24px;
        }
        
        .card-section--price{
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 50px;
        }
        .card-section--price .description-price {
            font-size: 34px;
            font-weight: bold;
            color: gray;
        }
        .btn-primary {
            height: 40px;
            border-radius: 50px;
            font-weight: bold;
            background-color: #3f4a8d;
            color: white;
            padding: 0 12px;
        }
        
        @media (min-width: 1024px){
            :host{
                grid-template-columns: auto auto;
                max-width: 900px;
            }
            .card-section--preview{
                height: 500px;
                width: 400px;
                font-size: 80px;
            }
            .card-section--preview > span:nth-child(1) {
                top:22px;
            }
            .card-section--preview > img {
                position: relative;
                width: 600px;
                transform: rotate(-35deg);
                left: -120px;
            }
            .card-section--description {
                display: grid;
                grid-template-rows: auto auto 1fr auto;
                padding: 60px 40px 40px 40px;
            }
            .card-section--description .description-text{
                margin-left: 40px;
            }
            
        }
        </style>
        `;
    }
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }

    connectedCallback(){
        this.render();
    }
    
}

customElements.define("card-nike", TargetNike);