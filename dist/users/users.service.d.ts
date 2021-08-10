import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    private readonly logger;
    criarUser(createUserDto: CreateUserDto): Promise<any>;
    atualizarUser(_id: string, updateUserDto: UpdateUserDto): Promise<User>;
    consultarTodosUsers(): Promise<User[]>;
    consultarUsersKey(_id: string): Promise<User>;
    consutarUserEmail(email: string): Promise<User>;
    deletarUser(_id: string): Promise<any>;
    bcrypt(password: any): Promise<string>;
}
