const express = require('express')
const cors = require('cors')

class Server {

    constructor() { // en el contructor es donde vamos a colocar las propiedades de mi clase
        this.app = express(); // voy a crear la aplicacion de express aqui, como una propiedad en la misma clase de servidor
        this.port = process.env.PORT;

        // Rutas que disponen mi servidor
        this.usuariosPath = '/api/usuarios'; //Primer ruta 

        // Middleware = son funciones que van a añadirle otra funcionalidad a mi server, es una funcion que siempre va a ejecutarse cuando levantemos nuestro servidor
        this.middlewares();

        // Rutas de mi aplicacion
        this.routes(); // cuando se llame mi constructor, al final, voy a llamar mis rutas ( dispara metodo )
    };

    middlewares() {

        // Cors
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use( express.json() )

        // Directorio publico
        this.app.use( express.static( 'public' ) ) // "use" = palabra clave para decir que esto es un middleware

    }
    
    routes() { // metodo
       
       this.app.use(this.usuariosPath, require('../routes/usuarios')) 
        
    };

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        } );
    }

}


module.exports = Server;