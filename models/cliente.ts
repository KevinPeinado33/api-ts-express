import { DataTypes } from 'sequelize'

import db from '../db/connection'

const Cliente = db.define('clientes', {
    titular: {
        type: DataTypes.STRING
    },
    fec_inicio: {
        type: DataTypes.DATE
    },
    fec_fin: {
        type: DataTypes.DATE
    },
    estado: {
        type: DataTypes.BOOLEAN
    },
    num_ceritficado: {
        type: DataTypes.STRING
    },
    uso: {
        type: DataTypes.STRING
    },
    num_placa: {
        type: DataTypes.STRING
    }
})

export default Cliente