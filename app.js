
class FlowCard extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title') || '';
        const type = this.getAttribute('type') || '';
        const step = this.getAttribute('step') || '';

        const content = this.innerHTML;

        this.innerHTML = `
            <div class="row mx-0 mb-4 p-0"> 
                <div class="col-1 text-white p-2 ${type}-logo"> Step ${step}</div>
                <div class="col-11 p-2 ${type}-text">${title}</div>
                <div class="col-12 p-3 border">
                    ${content}
                </div>
            </div>
        `;
    }
}
customElements.define('flow-card', FlowCard);


class Pic extends HTMLElement {
    connectedCallback() {
        const src = this.getAttribute('src') || '';
        this.innerHTML = ` <img src="${src}" style="max-width:100%;">`;
    }
}
customElements.define('pic-tag', Pic);

class Field extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <span class="badge bg-light text-dark border">
                ${this.innerHTML}
            </span>
        `;
    }
}
customElements.define('field-tag', Field);




//Flow Input
class FlowInput extends HTMLElement {
    connectedCallback() {
        const label = this.getAttribute('label') || '';
        const content = this.innerHTML;

        this.innerHTML = `
<div class="row mt-2">
<div class="col-2 p-2">${label}</div>
<div class="col-10 border p-2">${content}</div>
</div>
        `;
    }
}
customElements.define('flow-input', FlowInput);


class FlowField extends HTMLElement {
    connectedCallback() {
        const type = this.getAttribute('type') || '';
        const label = this.getAttribute('label') || '';
        const content = this.innerHTML;


this.innerHTML = `
<span data-toggle="popover"  title="${label}" data-content="${content}" class="flowField" data-placement="top">
<span class="badge ${type}-logo p-2 rounded-0 m-0">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="badge ${type}-text p-2 rounded-0 m-0">${label}</span>
</span>
`;
    }
}
customElements.define('flow-field', FlowField);




