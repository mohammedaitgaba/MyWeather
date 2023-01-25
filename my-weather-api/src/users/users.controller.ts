import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
  @Get('oneUser')
  getUsers() {
    return { user: 'meddd', email: 'gaba@gmail.com' };
  }
  @Get('manyUser')
  getmanyUsers() {
    return { user: 'medddww', email: 'gaba@gmail.com' };
  }
  @Post('CreateUser')
  CreateUser(@Req() request: Request, @Res() response: Response) {
    console.log(request.body);
    response.send('Created');
  }
}
