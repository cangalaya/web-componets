export default class myElement extends HTMLElement {
  constructor() {
    super();
    //Venimos al constructor que es donde generamos la instancia de esta api
    //Agregamos shadow down (API) y lo ponemos en modo open
    this.attachShadow({ mode: "open" });
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
          <section>
    
            <h2><slot name="title"></slot></h2>
            <div>
    
              <p><slot name="content">Soy text ejemplo</slot></p>
    
            </div>
    
          </section>
    
          ${this.getStyles()}
    
        `;
    return template;
  }

  getStyles() {
    return `
    
          <style>
            h2{
    
              color:red;
            }
          </style>
    
        `;
  }

  render() {
    //Ahora poder renderizar nuestros templates tenemos que cambiar el contexto
    //Donde agregamos nuestro template ya que lo estabamos agregando al dom global
    //Ahora debemos agregarlo en nuestro shadow dom que es otro contexto diferene
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("my-element", myElement);