class PersonaController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindAddPersona(this.handleAddPersona.bind(this));
    }

    handleAddPersona() {
        const persona = this.view.getPersonaInput();
        if (this.validatePersona(persona)) {
            this.model.addPersona(persona);
            this.view.clearInputs();
            this.view.renderPersonas(this.model.getPersonas());
        }
    }

    validatePersona(persona) {
        if (!persona.nombre) {
            alert("El campo Nombre está vacío");
            return false;
        } else if (!persona.apellido) {
            alert("El campo Apellido está vacío");
            return false;
        } else if (!persona.edad) {
            alert("El campo Edad está vacío");
            return false;
        } else if (!persona.ciudad) {
            alert("El campo Ciudad está vacío");
            return false;
        }
        return true;
    }
}