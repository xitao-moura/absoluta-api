"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrigemSchema = void 0;
const mongoose = require("mongoose");
exports.OrigemSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    status: {
        type: Number,
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