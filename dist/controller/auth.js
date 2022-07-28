"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const generar_jwt_1 = require("../helpers/generar-jwt");
const usuario_1 = __importDefault(require("../models/usuario"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        // verificar si el correo existe
        const usuario = yield usuario_1.default.findOne({ where: { email } });
        if (!usuario) {
            return res.status(400).json({ msg: 'Usuario / Password no son correctos - email' });
        }
        // verificar si el usuario esta activo en la bbdd
        if (!usuario.estado) {
            return res.status(400).json({ msg: 'El usuario esta desactivado !' });
        }
        if (password !== usuario.password) {
            return res.status(400).json({ msg: 'La constraseña del usuario no coincide!' });
        }
        // generar el jwt
        const token = yield (0, generar_jwt_1.generarJWT)(usuario.id);
        res.json({
            usuario,
            token
        });
    }
    catch (error) {
        res.status(500).json({ msg: 'Oops, algo salió mal!' });
    }
});
exports.login = login;
//# sourceMappingURL=auth.js.map