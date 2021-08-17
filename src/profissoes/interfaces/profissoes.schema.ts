import * as mongoose from 'mongoose';
import { Profissao } from './profissoes.interface';

export const ProfissaoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    status_id: {
        type: String,
        required: true
    }
}, { timestamps: true, collection: 'profissoes' });