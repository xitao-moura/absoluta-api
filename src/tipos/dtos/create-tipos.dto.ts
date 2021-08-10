import { ApiProperty } from '@nestjs/swagger';

export class CreateTipoDto {
    @ApiProperty()
    nome: string
    @ApiProperty()
    tipo: string
    createdAt: Date
    updatedAt: Date
}