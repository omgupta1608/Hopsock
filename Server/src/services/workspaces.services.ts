import { HttpException, Injectable, HttpStatus } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { WorkSpaceInterface } from "src/interfaces/workspaces.interace";
import { Model } from 'mongoose';

@Injectable()
export class WorkspacesService {
    constructor(@InjectModel('WorkSpace') private readonly _workspaces: Model<WorkSpaceInterface>) { };

    async getAllWorkSpaces(): Promise<WorkSpaceInterface[]> {
        return await this._workspaces.find();
    }

    async getUsersWorkSpaces(userid: string): Promise<WorkSpaceInterface[]> {
        if (userid.match(/^[0-9a-fA-F]{24}$/)) {
            return await this._workspaces.find({ owner: userid });
        } else {
            throw new HttpException('Something went wrong!', HttpStatus.BAD_REQUEST);
        }
    }

    async getOneWorkSpace(wid: string): Promise<WorkSpaceInterface> {
        if (wid.match(/^[0-9a-fA-F]{24}$/)) {
            return await this._workspaces.findById(wid);
        } else {
            throw new HttpException('Something went wrong!', HttpStatus.BAD_REQUEST);
        }

    }
    
    async MakeNewWorkSpace(workspace: WorkSpaceInterface): Promise<WorkSpaceInterface> {
        const newWS = new this._workspaces(workspace);
        return await newWS.save();
    }

    async deleteWorkSpace(wid: string): Promise<WorkSpaceInterface> {
        if (wid.match(/^[0-9a-fA-F]{24}$/)) {
            return await this._workspaces.findByIdAndRemove(wid);
        } else {
            throw new HttpException('Something went wrong!', HttpStatus.BAD_REQUEST);
        }
    }

    async updateWorkSpace(wid: string, wk: WorkSpaceInterface): Promise<WorkSpaceInterface> {
        if (wid.match(/^[0-9a-fA-F]{24}$/)) {
            return await this._workspaces.findByIdAndUpdate(wid, wk, { new: true, useFindAndModify:true });
        } else {
            throw new HttpException('Something went wrong!', HttpStatus.BAD_REQUEST);
        }
    }
}