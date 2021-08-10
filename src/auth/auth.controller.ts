import { Controller, UseGuards, Request, Post } from '@nestjs/common';
import { ApiBasicAuth } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard'

@Controller()
export class AuthController {

    constructor(
        private authService: AuthService
    ){}

    @ApiBasicAuth()
    @UseGuards(LocalAuthGuard)
    @Post('v1/auth/login')
    async login(@Request() req: any){
        return this.authService.login(req.user)
    }
}
