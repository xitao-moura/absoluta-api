import { Document } from 'mongoose';
export interface Endereco extends Document {
    indicacao_id: number;
    rua: string;
    num: string;
    complemento: string;
    bairro: string;
    cep: string;
    cidade_id: number;
    estado_id: number;
    latitude: string;
    longitude: string;
    createdAt: Date;
    updatedAt: Date;
}
