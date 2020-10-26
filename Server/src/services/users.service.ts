import { Injectable, HttpException, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { UsersSchema } from '../schemas/users.schema';
import { UserInterface } from '../interfaces/users.interface';

@Injectable()
export class UsersService{

    constructor(@InjectModel('User') private readonly _users: Model<UserInterface>) {  }

    async getAllUsers(): Promise<UserInterface> {
        return await this._users.find();
    }

    async getOneUser(userid: string): Promise<UserInterface> {
        if (userid.match(/^[0-9a-fA-F]{24}$/)) {
            return await this._users.findOne({ _id: userid });    
        }
    }
}