import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users.module';
import { WorkSpaceModule } from './modules/workspaces.module';
import { MongooseModule } from '@nestjs/mongoose';
import Keys from './config/keys';

@Module({
  imports: [MongooseModule.forRoot(Keys.mongo_uri),UsersModule,WorkSpaceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
