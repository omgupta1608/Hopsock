import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from 'src/services/users.service';

@Controller('api/users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}

    @Get('/')
    getAllUsers() {
        return this.usersService.getAllUsers();
    }

    @Get(':userid')
    getOneUser(@Param('userid') userid) {
        return this.usersService.getOneUser(userid);
    }
}