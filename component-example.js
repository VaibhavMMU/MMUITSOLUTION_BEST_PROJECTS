class HW extends HTMLElement {
	static #template;
	static #tag = 'hello-world';
	static {
		this.#template = document.createElement('template');
		this.#template.innerHTML = `<div>Hello <span>Vaibhav</span></div>`;
		customElements.define(this.#tag, this);
	}
  

	#root;
	constructor() {
		super();
		this.#root = this.attachShadow({ mode: 'closed' });
		this.#root.appendChild(HW.#template.content.cloneNode(true));
	}
	// connectedCallback() {}
	// disconnectedCallback() {}
	// adoptedCallback() {}

	static get observedAttributes() {
 	return [];
	}
	attributeChangedCallback(attrName, oldVal, newVal) {
		if(oldVal === newVal) { return; }
		console.log('Attr:', attrName, '; From:', oldVal, '; To:', newVal, '; In:', this);
        this.#root.querySelector('span').innerHTML = newVal ?? 'User';
	}
} 

class SE extends HTMLElement {
	static #template;
	static #tag = 'slot_example';
	static {
        //value = document.getElementById("Vaibhav").innerHTML;
		this.#template = document.createElement('template');
		this.#template.innerHTML =`<div>Start
        <slot><slot>
        <slot name="abc"></slot>
        <slot name="abc">default</slot>
            END
        </div>`;
		customElements.define(this.#tag, this);
	}
x
	#root;
	constructor() {
		super();
		this.#root = this.attachShadow({ mode: 'closed' });
		this.#root.appendChild(SE.#template.content.cloneNode(true));
	}
	// connectedCallback() {}
	// disconnectedCallback() {}
	// adoptedCallback() {}

	// static get observedAttributes() {
 	// return [];
	// }
	// attributeChangedCallback(attrName, oldVal, newVal) {
	// 	if(oldVal === newVal) { return; }
	// 	console.log('Attr:', attrName, '; From:', oldVal, '; To:', newVal, '; In:', this);
    //     this.#root.querySelector('span').innerHTML = newVal ?? 'User';
	// }
} 

class PB extends HTMLElement {
	static #template;
	static #tag = 'progress-bar';
	static {
		this.#template = document.createElement('template');
		this.#template.innerHTML = `Pogress <slot></slot>`;
		customElements.define(this.#tag, this);
	}
  

	#root;
	constructor() {
		super();
		this.#root = this.attachShadow({ mode: 'closed' });
		this.#root.appendChild(PB.#template.content.cloneNode(true));
	}
	// // connectedCallback() {}
	// // disconnectedCallback() {}
	// // adoptedCallback() {}

	// static get observedAttributes() {
 	// return [];
	// }
	// attributeChangedCallback(attrName, oldVal, newVal) {
	// 	if(oldVal === newVal) { return; }
	// 	console.log('Attr:', attrName, '; From:', oldVal, '; To:', newVal, '; In:', this);
    //     this.#root.querySelector('span').innerHTML = newVal ?? 'User';
	// }
} 