var Persona = {
    nombre: 'Pablo',
    edad: '23',
    genero: 'hombre',
    obtenerDetalles() {
        alert(`nombre: ${this.nombre}\nedad: ${this.edad}\ngenero: ${this.genero}`);
    }
}

var Estudiante = {
    __proto__: Persona,
    curso: '2do DAW',
    grupo: 'A',
    registrar() {
        alert(`nombre: ${this.nombre}\nedad: ${this.edad}\ngenero: ${this.genero}\ncurso: ${this.curso}\ngrupo:${this.grupo}`)
    }
}

var Profesor = {
    __proto__: Persona,
    asignatura: 'Desarrollo en entorno cliente',
    nivel: '3',
    asignar() {
        alert(`nombre: ${this.nombre}\nedad: ${this.edad}\ngenero: ${this.genero}\nasignatura: ${this.asignatura}\nnivel:${this.nivel}`);
    }
}

Persona.obtenerDetalles();
Estudiante.registrar();
Profesor.asignar();