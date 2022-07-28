"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../middlewares/index");
const usuarios_1 = require("../controller/usuarios");
const router = (0, express_1.Router)();
router.get('/', index_1.validarJWT, 
//esAdminRol, 
(0, index_1.tieneRole)('ADMIN_ROLE', 'INTEGRANTE'), usuarios_1.getUsuarios);
router.get('/:id', usuarios_1.getUsuario);
router.post('/', usuarios_1.postUsuario);
router.put('/:id', usuarios_1.putUsuario);
router.delete('/:id', usuarios_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=usuario.js.map