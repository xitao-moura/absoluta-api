import { Document } from 'mongoose';
export interface Status extends Document {
    nome: string;
    tipo: string;
    createdAt: Date;
    updatedAt: Date;
}
