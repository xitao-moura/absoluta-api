import { Tipos } from 'src/tipos/interfaces/tipos.entity';
import { Users } from 'src/users/interfaces/user.entity';
import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('encaminhamentos')
export class Encaminhamento extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: "int"
    })
    id: number;

    @Column({
        type: "date"
    })
    retorno: Date

    @Column({
        type: "int"
    })
    tipo_id: number

    @Column({
        type: "int"
    })
    usuario_id: number

    @Column({
        type: "int"
    })
    indicacao_id: number

    @Column({
        type: "date"
    })
    created: Date

    @Column({
        type: "date"
    })
    modified: Date

    @ManyToOne(type => Tipos)
    @JoinColumn({name: 'tipo_id', referencedColumnName: 'id'})
    tipo: Tipos;

    @ManyToOne(type => Users)
    @JoinColumn({name: 'usuario_id', referencedColumnName: 'id'})
    user: Users;
}