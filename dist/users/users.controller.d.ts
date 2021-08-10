import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
export declare class UsersController {
    private readonly usuariosService;
    private readonly logger;
    constructor(usuariosService: UsersService);
    criarUser(createUserDto: CreateUserDto): Promise<User>;
    consultarUsers(): Promise<User[]>;
    consultarUsersKey(_id: string): Promise<User[] | User>;
    atualizarUser(updateUserDto: UpdateUserDto, _id: string): Promise<void>;
    deletarUser(_id: string): Promise<void>;
}
