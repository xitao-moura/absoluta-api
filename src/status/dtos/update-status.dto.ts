import { ApiProperty } from '@nestjs/swagger';

export class UpdateStatusDto {
    @ApiProperty()
    nome: string
    @ApiProperty()
    tipo: string
    updatedAt: Date
}