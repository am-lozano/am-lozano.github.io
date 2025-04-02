class PersonaModel {
    constructor() {
        this.personas = [];
    }

    addPersona(persona) {
        this.personas.push(persona);
    }

    getPersonas() {
        return this.personas;
    }
}