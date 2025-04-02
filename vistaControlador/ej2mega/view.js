class PersonaView {
    constructor() {
        this.table = $("#js");
        this.nombreInput = $("#nombre");
        this.apellidoInput = $("#apellido");
        this.edadInput = $("#edad");
        this.ciudadInput = $("#ciudad");
        this.boton = $("#boton");
    }

    getPersonaInput() {
        return {
            nombre: this.nombreInput.val(),
            apellido: this.apellidoInput.val(),
            edad: this.edadInput.val(),
            ciudad: this.ciudadInput.val()
        };
    }

    clearInputs() {
        this.nombreInput.val('');
        this.apellidoInput.val('');
        this.edadInput.val('');
        this.ciudadInput.val('');
    }

    renderPersonas(personas) {
        this.table.find("tbody").empty();
        personas.forEach(persona => {
            this.table.append(this.createRow(persona));
        });
    }

    createRow(persona) {
        return `
            <tr>
                <td>${persona.nombre}</td>
                <td>${persona.apellido}</td>
                <td>${persona.edad}</td>
                <td>${persona.ciudad}</td>
            </tr>
        `;
    }

    bindAddPersona(handler) {
        this.boton.click(() => {
            handler();
        });
    }
}