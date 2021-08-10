"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteSchema = void 0;
const mongoose = require("mongoose");
exports.ClienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    tipo: {
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
}, { timestamps: true, collection: 'clientes' });
//# sourceMappingURL=clientes.schema.js.map