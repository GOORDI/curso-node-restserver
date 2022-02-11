const { response, request } = require('express') // desestructuramos response y request para poder tener el tipado pero no es necesario

// Controlador de las rutas

const usuariosGet = (req = request, res = response) => { // el metodo de server configura mis rutas
    
    const { q, nombre, apikey } = req.query

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey
    });
}

const usuariosPut = (req, res) => { 

    // const id = req.params.id;
    const { id } = req.params

    res.status(500).json({
        msg: 'put API - controlador',
        id
    });
};

const usuariosPost = (req, res) => {
    
    const { nombre, edad } = req.body; // req es lo que la persona esta solicitando
    // se desestructura el BODY lo que se necesita, es una pequeña validacion, para recibir solo lo que estoy esperando
    res.json({
        msg: 'post API - controlador',
        nombre, edad 
    });
};

const usuariosPatch = (req, res) => { 
    res.json({
        msg: 'patch API - controlador'
    });
};

const usuariosDelete = (req, res) => { 
    res.json({
        msg: 'delete API - controlador'
    });
}; 


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete
}