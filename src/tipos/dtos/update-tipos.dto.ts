import { ApiProperty } from '@nestjs/swagger';

export class UpdateTipoDto {
    @ApiProperty()
    nome: string
    @ApiProperty()
    tipo: string
    updatedAt: Date
}