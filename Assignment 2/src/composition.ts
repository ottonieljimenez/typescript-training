class Motor {
    encender(): void {
        console.log("¡Motor encendido!");
    }

    apagar(): void {
        console.log("¡Motor apagado!");
    }
}

class Carro {
    private motor: Motor = new Motor();

    encenderCarro() {
        this.motor.encender();
        console.log("¡Carro encendido!\n");
    }

    apagarCarro() {
        this.motor.apagar();
        console.log("¡Carro apagado!");
    }
}

// objeto de tipo Carro
const carro = new Carro();
carro.encenderCarro();
carro.apagarCarro();