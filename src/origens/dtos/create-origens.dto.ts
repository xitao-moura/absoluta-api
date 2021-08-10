import { ApiProperty } from '@nestjs/swagger';

export class CreateOrigemDto {
    @ApiProperty()
    nome: string
    @ApiProperty()
    status: Number
    createdAt: Date
    updatedAt: Date
}