import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
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
    @ApiProperty()
    createdAt: Date
    @ApiProperty()
    updatedAt: Date
}