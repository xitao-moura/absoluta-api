"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CidadeSchema = void 0;
const mongoose = require("mongoose");
exports.CidadeSchema = new mongoose.Schema({
    uf: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    estado_id: {
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
}, { timestamps: true, collection: 'cidades' });
//# sourceMappingURL=cidades.schema.js.map