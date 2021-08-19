"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnderecosSchema = void 0;
const mongoose = require("mongoose");
exports.EnderecosSchema = new mongoose.Schema({
    indicacao_id: {
        type: Number,
        required: true
    },
    rua: {
        type: String,
        required: true
    },
    num: {
        type: String,
        required: true
    },
    complemento: {
        type: String,
        required: true
    },
    bairro: {
        type: String,
        required: true
    },
    cep: {
        type: String,
        required: true
    },
    cidade_id: {
        type: Number,
        required: true
    },
    estado_id: {
        type: Number,
        required: true
    },
    latitude: {
        type: String,
        required: true
    },
    longitude: {
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
}, { timestamps: true, collection: 'enderecos' });
//# sourceMappingURL=enderecos.schema.js.map