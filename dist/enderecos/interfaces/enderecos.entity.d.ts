import { BaseEntity } from 'typeorm';
import { Indicacao } from 'src/indicacoes/interfaces/indicacoes.entity';
export declare class Enderecos extends BaseEntity {
    id: number;
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
    created: Date;
    modified: Date;
    indicacao: Indicacao;
}
