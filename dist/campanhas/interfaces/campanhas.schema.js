"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampanhaSchema = void 0;
const mongoose = require("mongoose");
exports.CampanhaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    mensagem: {
        type: String,
        required: true
    },
    status: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Status'
    },
    data_inicio: {
        type: Date,
        required: true
    },
    data_final: {
        type: Date,
        required: true
    },
    horarios: {
        type: [Date],
        required: true
    },
    indicacoes: {
        type: [Number],
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
}, { timestamps: true, collection: 'campanhas' });
//# sourceMappingURL=campanhas.schema.js.map