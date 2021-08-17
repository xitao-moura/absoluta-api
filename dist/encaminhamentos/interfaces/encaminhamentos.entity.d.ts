import { Tipos } from 'src/tipos/interfaces/tipos.entity';
import { Users } from 'src/users/interfaces/user.entity';
import { BaseEntity } from 'typeorm';
export declare class Encaminhamento extends BaseEntity {
    id: number;
    retorno: Date;
    tipo_id: number;
    usuario_id: number;
    indicacao_id: number;
    created: Date;
    modified: Date;
    tipo: Tipos;
    user: Users;
}
