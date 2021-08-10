import * as mongoose from 'mongoose';
import { Fornecedor } from './fornecedores.interface';

export const FornecedorSchema = new mongoose.Schema({
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
}, { timestamps: true, collection: 'fornecedores' });