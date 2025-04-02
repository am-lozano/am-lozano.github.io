class ToDoEntidad {

    constructor(id, nombre, fecha, estado) {
        this.id = id;
        this.nombre = nombre;
        this.fecha = fecha;
        this.estado = estado;
    }

    getId() {
        return this.id;
    }


    getNombre() {
        return this.nombre;
    }


    getFecha() {
        return this.fecha;
    }


    getEstado() {
        return this.estado;
    }

    setID(id) {
        this.id = id;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    setFecha(fecha) {
        this.fecha = fecha;
    }

    setEstado(estado) {
        this.estado = estado;
    }

}