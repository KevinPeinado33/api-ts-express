"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Cliente = connection_1.default.define('clientes', {
    titular: {
        type: sequelize_1.DataTypes.STRING
    },
    fecInicio: {
        type: sequelize_1.DataTypes.DATE
    },
    fecFin: {
        type: sequelize_1.DataTypes.DATE
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    numCertificado: {
        type: sequelize_1.DataTypes.STRING
    },
    uso: {
        type: sequelize_1.DataTypes.STRING
    },
    numPlaca: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports.default = Cliente;
//# sourceMappingURL=cliente.js.map