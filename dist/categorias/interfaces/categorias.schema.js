"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaSchema = void 0;
const mongoose = require("mongoose");
exports.CategoriaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    status: {
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
}, { timestamps: true, collection: 'categorias' });
//# sourceMappingURL=categorias.schema.js.map