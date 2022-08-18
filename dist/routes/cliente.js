"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../middlewares/index");
const clientes_1 = require("../controller/clientes");
const router = (0, express_1.Router)();
router.get('/', index_1.validarJWT, (0, index_1.tieneRole)('ADMIN_ROLE', 'INTEGRANTE'), clientes_1.getClientes);
router.get('/:numPlaca', clientes_1.getClienteByNumPlaca);
router.get('/find/:id', index_1.validarJWT, (0, index_1.tieneRole)('ADMIN_ROLE', 'INTEGRANTE'), clientes_1.getCliente);
router.post('/', 
/*     validarJWT,
    tieneRole('ADMIN_ROLE', 'INTEGRANTE'), */
clientes_1.postCliente);
router.put('/:id', index_1.validarJWT, (0, index_1.tieneRole)('ADMIN_ROLE', 'INTEGRANTE'), clientes_1.putCliente);
router.delete('/:id', index_1.validarJWT, (0, index_1.tieneRole)('ADMIN_ROLE', 'INTEGRANTE'), clientes_1.deleteCliente);
exports.default = router;
//# sourceMappingURL=cliente.js.map