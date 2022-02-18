'use strict'

const { Axios, default: axios} = require("axios");

class HappyController {

    async Recibir({request}){
        console.log("Recibí un hola del cliente");
        console.log("He mandado un mensaje al servidor 2");
        const msg = "¡Hola!";
        axios.post('http://127.0.0.3:3334/re', msg)
        .then(function(response){
            console.log("He recibido un hola del servidor 2");
            console.log("He mandado un mensaje al cliente");
        }).catch(function(response){
            console.log("Error al comunicarse con servidor 2");
        })
    }
}

module.exports = HappyController
