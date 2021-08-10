import { JwtService } from '@nestjs/jwt';
import { UsersService } from './../users/users.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validadeUser(userEmail: string, userPassword: string): Promise<{
        _id: any;
        nome: string;
        email: string;
    }>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
