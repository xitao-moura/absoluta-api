import * as mongoose from 'mongoose';
import { Endereco } from './enderecos.interface';

export const EnderecosSchema = new mongoose.Schema({
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