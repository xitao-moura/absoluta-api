"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoSchema = void 0;
const mongoose = require("mongoose");
exports.ProdutoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    fornecedor: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true, collection: 'produtos' });
//# sourceMappingURL=produtos.schema.js.map