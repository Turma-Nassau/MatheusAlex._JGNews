const { Router } = require('express');
const usuarioController = require('../controllers/usuarioController');
const router = Router();


router.post('/', usuarioController.criarUsuario );

router.get('/', usuarioController.verTodosUsuarios);

router.get('/:id', usuarioController.verUsuarioPorId);

router.patch('/:id', usuarioController.atualizarUsuario);

router.delete('/:id', usuarioController.deletarUsuario);

module.exports = router;