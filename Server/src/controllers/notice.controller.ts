import { Controller, Get, Param, Body, Post, HttpException, HttpStatus, Delete, Put } from '@nestjs/common';
import { NoticeDto } from '../dto/notice.dto';
import { NoticeService } from '../services/notices.service';

@Controller('api/notices')
export class NoticeController {
    constructor(private readonly noticeService: NoticeService) { }

    @Get('/')
    async getAllNotices() {
        return this.noticeService.getAllNotice();
    }

    @Get('wk/:wid')
    async getWkNotices(@Param('wid') wid: string) {
        if (wid.match(/^[0-9a-fA-F]{24}$/)) {
            return this.noticeService.getWkNotices(wid);
        } else {
            throw new HttpException('Something went wrong!', HttpStatus.BAD_REQUEST);
        }
    }

    @Get(':nid')
    async getOneNotice(@Param('nid') nid: string) {
        if (nid.match(/^[0-9a-fA-F]{24}$/)) {
            return this.noticeService.getOneNotice(nid);
        } else {
            throw new HttpException('Something went wrong!', HttpStatus.BAD_REQUEST);
        }
    }

    @Post()
    async postNotice(@Body() notice: NoticeDto) {
        return this.noticeService.postNotice(notice);
    }

    @Delete(':nid')
    async deleteNotice(@Param('nid') nid: string) {
        if (nid.match(/^[0-9a-fA-F]{24}$/)) {
            return this.noticeService.deleteNotice(nid);
        } else {
            throw new HttpException('Something went wrong!', HttpStatus.BAD_REQUEST);
        }
    }

    @Put(':nid')
    async updateNotice(@Param('nid') nid: string, @Body() notice: NoticeDto) {
        if (nid.match(/^[0-9a-fA-F]{24}$/)) {
            return this.noticeService.updateNotice(nid, notice);
        } else {
            throw new HttpException('Something went wrong!', HttpStatus.BAD_REQUEST);
        }
    }
}