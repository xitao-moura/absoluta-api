import { BaseEntity } from 'typeorm';
import { Indicacao } from 'src/indicacoes/interfaces/indicacoes.entity';
export declare class Profissoes extends BaseEntity {
    id: number;
    nome: string;
    status_id: number;
    indicacao: Indicacao[];
}
