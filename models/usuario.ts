import { DataTypes } from 'sequelize'

import db from '../db/connection'

const Usuario = db.define('usuarios', {
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    },
    password: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.STRING
    }
})

export default Usuario