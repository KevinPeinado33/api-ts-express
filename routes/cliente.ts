import { Router } from 'express'

import {
    validarJWT,
    tieneRole
} from '../middlewares/index'

import {
    getClientes,
    getClienteByNumPlaca,
    getCliente,
    postCliente,
    putCliente,
    deleteCliente
} from '../controller/clientes'

const router = Router()

router.get(
    '/',
    validarJWT,
    tieneRole('ADMIN_ROLE', 'INTEGRANTE'),
    getClientes
)

router.get(
    '/:numPlaca',
    getClienteByNumPlaca
)

router.get(
    '/find/:id',
    validarJWT,
    tieneRole('ADMIN_ROLE', 'INTEGRANTE'),
    getCliente
)

router.post(
    '/',
    validarJWT,
    tieneRole('ADMIN_ROLE', 'INTEGRANTE'),
    postCliente
)

router.put(
    '/:id',
    validarJWT,
    tieneRole('ADMIN_ROLE', 'INTEGRANTE'),
    putCliente
)

router.delete(
    '/:id',
    validarJWT,
    tieneRole('ADMIN_ROLE', 'INTEGRANTE'),
    deleteCliente
)

export default router