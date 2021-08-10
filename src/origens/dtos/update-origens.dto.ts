import { ApiProperty } from '@nestjs/swagger';

export class UpdateOrigemDto {
    @ApiProperty()
    nome: string
    @ApiProperty()
    status: Number
    updatedAt: Date
}