import template from "./template.js";

export default class CoolForm extends HTMLElement {
    connectedCallback() {
        this.data = {
            type: this.type
        }
        this.innerHTML = template.render({bg: this.getAttribute("bg")});;
    }

}