import { HttpException, Injectable, HttpStatus } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { NoticeInterface } from "src/interfaces/notice.interface";

@Injectable()
export class NoticeService {
    constructor(@InjectModel('Notice') private readonly _notices: Model<NoticeInterface>) { }

    async getAllNotice(): Promise<NoticeInterface[]> {
        return await this._notices.find();
    }

    async getWkNotices(wid: string): Promise<NoticeInterface[]> {
        return await this._notices.find({ wid: wid });
    }

    async getOneNotice(nid: string): Promise<NoticeInterface> {
        return await this._notices.findById(nid);
    }

    async postNotice(notice: NoticeInterface) {
        const newNotice = new this._notices(notice);
        return await newNotice.save();
    }

    async deleteNotice(nid: string) {
        return await this._notices.findByIdAndRemove(nid);
    }

    async updateNotice(nid: string, notice: NoticeInterface) {
        return await this._notices.findOneAndUpdate({ nid: nid }, notice, { useFindAndModify: false });
    }

}