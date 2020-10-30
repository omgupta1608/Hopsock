import { Controller, Get, Param, Post, Body, HttpException, HttpStatus, Delete, Put } from '@nestjs/common';
import { UserDto } from 'src/dto/users.dto';
import { UsersService } from 'src/services/users.service';

@Controller('api/users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get('/')
    async getAllUsers() {
        return await this.usersService.getAllUsers();
    }

    @Get(':userid')
    async getOneUser(@Param('userid') userid:string) {
        if (userid.match(/^[0-9a-fA-F]{24}$/)) {
            return await this.usersService.getOneUser(userid);
        } else {
            throw new HttpException('Something went wrong!', HttpStatus.BAD_REQUEST);
        }
    }

    @Post()
    async UserSignUp(@Body() userDto: UserDto) {
        return await this.usersService.SignUpUser(userDto);
    }

    @Delete(':userid')
    async delteUser(@Param('userid') userid:string) {
        if (userid.match(/^[0-9a-fA-F]{24}$/)) {
            return await this.usersService.delteUser(userid);
        } else {
            throw new HttpException('Something went wrong!', HttpStatus.BAD_REQUEST);
        }

    }

    //HAS SOME BUGSS
    @Put(':userid')
    async update(@Param('userid') userid:string, @Body() user: UserDto) {
        if (userid.match(/^[0-9a-fA-F]{24}$/)) {
            return await this.usersService.updateUser(userid, user);
        } else {
            throw new HttpException('Something went wrong!', HttpStatus.BAD_REQUEST);
        }
    }
}
