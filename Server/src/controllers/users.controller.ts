import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from 'src/services/users.service';

@Controller('api/users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}

    @Get('/')
    async getAllUsers() {
        return await this.usersService.getAllUsers();
    }

    @Get(':userid')
    async getOneUser(@Param('userid') userid) {
        return await this.usersService.getOneUser(userid);
    }
}