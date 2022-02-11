
const { Router } = require('express');
const { usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosPatch,
        usuariosDelete } = require('../controllers/usuarios');

// Rutas

const router = Router();

router.get('/', usuariosGet ); // usuariosGet no se ejecuta, solo se manda referencia de la misma 

router.put('/:id', usuariosPut);

router.post('/', usuariosPost);

router.patch('/', usuariosPatch);

router.delete('/', usuariosDelete);


module.exports = router;