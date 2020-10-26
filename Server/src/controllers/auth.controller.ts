import { Controller,Delete,Get, Param, Post } from '@nestjs/common';
@Controller()
export class AuthController {

    // The endpoint called from google after signin
    @Get('google/callback')
    public async googleCallback() {
    }
  
    @Get('google')
    public async googleSignIn() {
    }

}