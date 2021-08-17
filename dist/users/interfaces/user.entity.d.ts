import { Status } from 'src/status/interfaces/status.entity';
import { Tipos } from 'src/tipos/interfaces/tipos.entity';
import { BaseEntity } from 'typeorm';
export declare class Users extends BaseEntity {
    id: number;
    nome: string;
    senha: string;
    tipo_id: number;
    status_id: number;
    created: Date;
    modified: Date;
    gestor: number;
    tipo: Tipos;
    status: Status;
}
