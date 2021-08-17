"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfissaoSchema = void 0;
const mongoose = require("mongoose");
exports.ProfissaoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    status_id: {
        type: String,
        required: true
    }
}, { timestamps: true, collection: 'profissoes' });
//# sourceMappingURL=profissoes.schema.js.map