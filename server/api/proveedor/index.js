const express = require('express');
const ProveedorControllerCustom = require('./proveedor.controller.custom');
const controller = new ProveedorControllerCustom();

const router = express.Router();

router.get('/', controller.getAll);
router.get('/:IdProveedor', controller.getById);
router.post('/', controller.insert);
router.put('/:IdProveedor', controller.update);
router.delete('/:IdProveedor', controller.remove);

module.exports = router;
