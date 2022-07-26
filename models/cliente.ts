import { DataTypes } from 'sequelize'

import db from '../db/connection'

const Cliente = db.define('clientes', {
    titular: {
        type: DataTypes.STRING
    },
    fecInicio: {
        type: DataTypes.DATE
    },
    fecFin: {
        type: DataTypes.DATE
    },
    estado: {
        type: DataTypes.BOOLEAN
    },
    numCertificado: {
        type: DataTypes.STRING
    },
    uso: {
        type: DataTypes.STRING
    },
    numPlaca: {
        type: DataTypes.STRING
    }
})

export default Cliente