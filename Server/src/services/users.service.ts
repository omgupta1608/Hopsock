import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService{

    getAllUsers(){
        return 'All Users';
    }

    getOneUser(userid:string){
        return `User with userid - ${userid}`;
    }
}