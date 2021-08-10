import { Document } from 'mongoose';
export interface Tipo extends Document {
    nome: string;
    tipo: string;
    createdAt: Date;
    updatedAt: Date;
}
