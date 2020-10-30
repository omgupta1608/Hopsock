import { Injectable } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class ALoginService {

    constructor(private readonly jwtService: JwtService) { }

    async ALogin(email: string, password: string) {
        if (email == 'omgupta1608@gmail.com' && password == 'om123') {
            const payload = { isStudent: false, isFaculty: false, isAdmin: true };
            return {
                status: 200,
                message: 'Successfully logged in as ' + email,
                access_token: this.jwtService.sign(payload)
            };
        }
    }
}