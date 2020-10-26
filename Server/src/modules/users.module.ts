import { Module } from '@nestjs/common';
import { UsersController } from '../controllers/users.controller';
import { UsersService } from '../services/users.service';
import {MongooseModule} from '@nestjs/mongoose';
import {UsersSchema} from '../schemas/users.schema';
@Module({
    imports:[MongooseModule.forFeature([{ name: 'Users', schema: UsersSchema }])],
    controllers: [UsersController],
    providers: [UsersService],
})
export class UsersModule { }