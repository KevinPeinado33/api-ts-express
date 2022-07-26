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
exports.deleteCliente = exports.putCliente = exports.postCliente = exports.getCliente = exports.getClienteByNumPlaca = exports.getClientes = void 0;
const cliente_1 = __importDefault(require("../models/cliente"));
const getClientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientes = yield cliente_1.default.findAll();
    res.json({ clientes });
});
exports.getClientes = getClientes;
const getClienteByNumPlaca = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { numPlaca } = req.params;
    const cliente = yield cliente_1.default.findOne({
        where: {
            numPlaca
        }
    });
    if (!cliente) {
        return res.status(404).json({ msg: `El cliente con el ${numPlaca} no existe.` });
    }
    res.json(cliente);
});
exports.getClienteByNumPlaca = getClienteByNumPlaca;
const getCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cliente = yield cliente_1.default.findByPk(id);
    if (cliente) {
        res.json(cliente);
    }
    else {
        res.status(404).json({ msg: `El cliente con el ${id} no existe.` });
    }
});
exports.getCliente = getCliente;
const postCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existePlaca = yield cliente_1.default.findOne({
            where: {
                numPlaca: body.numPlaca
            }
        });
        if (existePlaca) {
            return res.status(400).json({ msg: `Ya existe un cliente con la placa ${body.num_placa}` });
        }
        const cliente = cliente_1.default.build(body);
        yield cliente.save();
        res.json(cliente);
    }
    catch (error) {
        res.status(500).json({ msg: 'Hable con el administrador.' });
    }
});
exports.postCliente = postCliente;
const putCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const cliente = yield cliente_1.default.findByPk(id);
        if (!cliente) {
            return res.status(404).json({ msg: `El cliente con el ${id} no existe.` });
        }
        yield cliente.update(body);
        res.json(cliente);
    }
    catch (error) {
        res.status(500).json({ msg: 'Hable con el administrador.' });
    }
});
exports.putCliente = putCliente;
const deleteCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cliente = yield cliente_1.default.findByPk(id);
    if (!cliente) {
        return res.status(404).json({ msg: `El cliente con el ${id} no existe.` });
    }
    yield cliente.destroy();
    res.json({ msg: 'El cliente ha sido eliminado.' });
});
exports.deleteCliente = deleteCliente;
//# sourceMappingURL=clientes.js.map