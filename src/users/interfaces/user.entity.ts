import { Status } from 'src/status/interfaces/status.entity';
import { Tipos } from 'src/tipos/interfaces/tipos.entity';
import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuarios')
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: "int"
    })
    id: number;

    @Column({
        type: "varchar",
        length: 255
    })
    nome: string

    @Column({
        type: "varchar",
        length: 255
    })
    senha: string

    @Column({
        type: "int"
    })
    tipo_id: number

    @Column({
        type: "int"
    })
    status_id: number

    @Column({
        type: "date"
    })
    created: Date

    @Column({
        type: "date"
    })
    modified: Date

    @Column({
        type: "int"
    })
    gestor: number

    @ManyToOne(type => Tipos)
    @JoinColumn({name: 'tipo_id', referencedColumnName: 'id'})
    tipo: Tipos;

    @ManyToOne(type => Status)
    @JoinColumn({name: 'status_id', referencedColumnName: 'id'})
    status: Status;
}