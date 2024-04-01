interface Empleado {
    trabajar(tarea: string): void;
}

class Desarrollador implements Empleado {
    trabajar(tarea: string): void {
        console.log(`El desarrollador está llevando a cabo la siguiente tarea: ${tarea}.`);
    }
}

class Diseñador implements Empleado {
    trabajar(tarea: string): void {
        console.log(`El diseñador está llevando a cabo la siguiente tarea: ${tarea}.`)
    }
}

// Objeto de tipo Desarrollador
const desarrollador = new Desarrollador();
desarrollador.trabajar("Arreglo de Bugs");

const diseñador = new Diseñador()
diseñador.trabajar("Diseño de Interfaz Gráfica");