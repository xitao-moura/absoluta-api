import { Controller, Get, Post, Body, UseGuards, Logger, Param, Delete, Put } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto'
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('v1/users')
export class UsersController {

    private readonly logger = new Logger(UsersController.name);

    constructor(private readonly usuariosService: UsersService) {}

    //@UseGuards(JwtAuthGuard)
    @Post()
    async criarUser(
        @Body() createUserDto: CreateUserDto
    ): Promise<User>{
        return await this.usuariosService.criarUser(createUserDto)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async consultarUsers(): Promise<User[]> {
        return await this.usuariosService.consultarTodosUsers();
    }

    @Get('/:_id')
    async consultarUsersKey(@Param('_id') _id: string): Promise<User[] | User> {
        return await this.usuariosService.consultarUsersKey(_id);
    }

    @Put('/:_id')
    async atualizarUser(
        @Body() updateUserDto: UpdateUserDto,
        @Param('_id') _id: string
    ): Promise<void> { 
        this.logger.log(`updateUserDto: ${JSON.stringify(updateUserDto)}`);
        await this.usuariosService.atualizarUser(_id,updateUserDto)
    }

    @Delete('/:_id')
    async deletarUser(
        @Param('_id') _id: string): Promise<void>{
        this.usuariosService.deletarUser(_id)
    }

}