const express = require('express');
const router = express.Router();
const PenjualanController = require('../controller/penjualanController');

//routes
router.get('/', PenjualanController.getAll);
router.get('/:id', PenjualanController.getById);
router.post('/', PenjualanController.create);
router.put('/:id', PenjualanController.update);
router.delete('/:id', PenjualanController.delete);

module.exports = router;