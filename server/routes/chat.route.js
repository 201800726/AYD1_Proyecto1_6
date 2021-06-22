const express = require('express');
const router = express.Router();

const chatController = require('../controllers/chat.controller');

router.route('/employee/:idEmpleado')
    .get(chatController.chats);

router.route('/:idReporte/mensaje')
    .get(chatController.mensajes)
    .post(chatController.crearMensaje);

module.exports = router;