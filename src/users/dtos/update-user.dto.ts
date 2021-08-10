import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
    @ApiProperty()
    nome: string
    @ApiProperty()
    email: string
    @ApiProperty()
    password: string
    @ApiProperty()
    tipo: string
    @ApiProperty()
    status: string
    updatedAt: Date
}