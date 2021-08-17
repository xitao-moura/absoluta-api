"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrigensSchema = void 0;
const mongoose = require("mongoose");
exports.OrigensSchema = new mongoose.Schema({
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
}, { timestamps: true, collection: 'origens' });
//# sourceMappingURL=origens.schema.js.map