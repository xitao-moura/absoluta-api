import { BaseEntity } from 'typeorm';
import { Indicacao } from 'src/indicacoes/interfaces/indicacoes.entity';
export declare class Origens extends BaseEntity {
    id: number;
    nome: string;
    created: Date;
    modified: Date;
    indicacao: Indicacao[];
}
