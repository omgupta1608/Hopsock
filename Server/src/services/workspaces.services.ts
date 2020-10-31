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
        return await this._workspaces.find({ owner: userid });
    }

    async getOneWorkSpace(wid: string): Promise<WorkSpaceInterface> {
        return await this._workspaces.findById(wid);
    }

    async MakeNewWorkSpace(workspace: WorkSpaceInterface): Promise<WorkSpaceInterface> {
        const newWS = new this._workspaces(workspace);
        return await newWS.save();
    }

    async deleteWorkSpace(wid: string): Promise<WorkSpaceInterface> {
        return await this._workspaces.findByIdAndRemove(wid);
    }

    async updateWorkSpace(wid: string, wk: WorkSpaceInterface): Promise<WorkSpaceInterface> {
        return await this._workspaces.findByIdAndUpdate(wid, wk, { new: true, useFindAndModify: false });
    }

    async addMember(wid: string, userid: string) {
        const wk = this._workspaces.findByIdAndUpdate(wid, {
            $push: { 
                members: userid,
                useFindAndModify:false
            }
        });
        return wk;
    }

    async removeMember(wid: string, userid: string) { 
        const wk = await this._workspaces.findById(wid);
        var members = wk.members;
        const index = members.indexOf(userid);
        if (index > -1) {
            members.splice(index, 1);
        }
        wk.members = members;
        return this._workspaces.findByIdAndUpdate(wid, { members: members });
    }
}