import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NoticeController } from '../controllers/notice.controller';
import { NoticeService } from '../services/notices.service';
import { NoticeSchema } from '../schemas/notice.schema';


@Module({
    imports: [MongooseModule.forFeature([{ name: 'Notice', schema: NoticeSchema }])],
    controllers: [NoticeController],
    providers: [NoticeService],
})
export class NoticeModule { }