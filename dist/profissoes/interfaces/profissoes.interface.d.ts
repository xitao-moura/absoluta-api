import { Document } from 'mongoose';
export interface Profissao extends Document {
    nome: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}
