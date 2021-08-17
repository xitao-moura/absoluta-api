"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusSchema = void 0;
const mongoose = require("mongoose");
exports.StatusSchema = new mongoose.Schema({
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
}, { timestamps: true, collection: 'status' });
//# sourceMappingURL=status.schema.js.map