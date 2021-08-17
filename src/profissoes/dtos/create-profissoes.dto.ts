import { ApiProperty } from '@nestjs/swagger';

export class CreateProfissaoDto {
    @ApiProperty()
    nome: string
    @ApiProperty()
    status_id: string
    createdAt: Date
    updatedAt: Date
}