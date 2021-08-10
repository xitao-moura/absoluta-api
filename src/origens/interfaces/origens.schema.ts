import * as mongoose from 'mongoose';
import { Origem } from './origens.interface';

export const OrigemSchema = new mongoose.Schema({
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