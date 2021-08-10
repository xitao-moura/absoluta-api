import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

@Entity('status')
export class Status extends BaseEntity {
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
    grupo: string

    @Column({
        type: "varchar",
        length: 255
    })
    cor: string

    @Column({
        type: "text"
    })
    descricao: string

    @Column({
        type: "date"
    })
    created: Date

    @Column({
        type: "date"
    })
    modified: Date
}