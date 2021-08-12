"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SiteSchema = void 0;
const mongoose = require("mongoose");
exports.SiteSchema = new mongoose.Schema({
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
}, { timestamps: true, collection: 'sites' });
//# sourceMappingURL=origens.schema.js.map