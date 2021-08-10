import { ApiProperty } from '@nestjs/swagger';

export class CreateStatusDto {
    @ApiProperty()
    nome: string
    @ApiProperty()
    tipo: string
    createdAt: Date
    updatedAt: Date
}