import { Controller, Get, Param, Body, Post, HttpException, HttpStatus, Delete, Put } from '@nestjs/common';
import { WorkSpaceDto } from 'src/dto/workspace.dto';
import { WorkspacesService } from '../services/workspaces.services';

@Controller('api/workspace')
export class WorkSpacesController {
    constructor(private readonly workspaceService: WorkspacesService) { }

    @Get('/')
    async getAllWorkSpaces() {
        return this.workspaceService.getAllWorkSpaces();
    }

    @Get(':userid')
    async getUsersWorkSpaces(@Param('userid') userid) {
        if (userid.match(/^[0-9a-fA-F]{24}$/)) {
            return this.workspaceService.getUsersWorkSpaces(userid);
        } else {
            throw new HttpException('Something went wrong!', HttpStatus.BAD_REQUEST);
        }
    }

    @Get(':wid')
    async getOneWorkSpace(@Param('wid') wid) {
        if (wid.match(/^[0-9a-fA-F]{24}$/)) {
            return this.workspaceService.getOneWorkSpace(wid);
        } else {
            throw new HttpException('Something went wrong!', HttpStatus.BAD_REQUEST);
        }
    }

    @Post()
    async MakeNewWorkSpace(@Body() wkDto: WorkSpaceDto) {
        return await this.workspaceService.MakeNewWorkSpace(wkDto);
    }

    @Delete(':wid')
    async deleteWorkSpace(@Param('wid') wid) {
        if (wid.match(/^[0-9a-fA-F]{24}$/)) {
            return await this.workspaceService.deleteWorkSpace(wid);
        } else {
            throw new HttpException('Something went wrong!', HttpStatus.BAD_REQUEST);
        }
    }

    @Put(':wid')
    async updateWorkSpace(@Param('wid') wid, @Body() wk: WorkSpaceDto) {
        if (wid.match(/^[0-9a-fA-F]{24}$/)) {
            return await this.workspaceService.updateWorkSpace(wid, wk);
        } else {
            throw new HttpException('Something went wrong!', HttpStatus.BAD_REQUEST);
        }
    }
}