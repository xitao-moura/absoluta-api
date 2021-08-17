import { ApiProperty } from '@nestjs/swagger';

export class CreateOrigensDto {
    @ApiProperty()
    nome: string
    createdAt: Date
    updatedAt: Date
}