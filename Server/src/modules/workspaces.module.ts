import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {WorkSpacesController } from '../controllers/workspaces.controller';
import { WorkspacesService} from '../services/workspaces.services';
import { WorkSpaceSchema} from '../schemas/workspace.schema';


@Module({
    imports: [MongooseModule.forFeature([{ name: 'WorkSpace', schema: WorkSpaceSchema }])],
    controllers: [WorkSpacesController],
    providers: [WorkspacesService],
})
export class WorkSpaceModule { }