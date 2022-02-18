'use strict'


class HappierController {
    async Recibir({request}){
        console.log("Recibí un hola del servidor 1");
        console.log("He mandado un mensaje al servidor 1");
    }
}

module.exports = HappierController
