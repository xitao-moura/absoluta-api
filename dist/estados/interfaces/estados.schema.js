"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstadoSchema = void 0;
const mongoose = require("mongoose");
exports.EstadoSchema = new mongoose.Schema({
    uf: {
        type: String,
        required: true
    },
    nome: {
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
}, { timestamps: true, collection: 'estados' });
//# sourceMappingURL=estados.schema.js.map