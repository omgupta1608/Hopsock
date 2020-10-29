import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { UserInterface } from '../interfaces/users.interface';

@Injectable()
export class UsersService {

    constructor(@InjectModel('User') private readonly _users: Model<UserInterface>) { }

    async getAllUsers(): Promise<UserInterface> {
        return await this._users.find();
    }

    async getOneUser(userid: string): Promise<UserInterface> {
        return await this._users.findOne({ _id: userid });
    }

    async SignUpUser(user: UserInterface): Promise<UserInterface> {
        const newUser = new this._users(user);
        return await newUser.save();
    }

    async delteUser(userid: string): Promise<UserInterface> {
        return await this._users.findByIdAndRemove(userid);
    }

    async updateUser(userid: string, user: UserInterface): Promise<UserInterface> {
        return await this._users.findByIdAndUpdate(userid, user, { new: true, useFindAndModify:true });
    }
}