import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 유저 전체 조회
  @Get()
  getAllUser() {
    return '유저 전체 조회';
  }

  // 유저 상세
  @Get(':id')
  getCurrentUser() {
    return '유저 상세 조회';
  }

  // 유저 등록(회원가입)
  @Post('signup')
  signUp() {
    return '회원 가입';
  }

  // 유저 로그인
  @Post('login')
  login() {
    return '로그인';
  }

  // 로그아웃
  @Post('logout')
  logOut() {
    return '로그아웃';
  }

  // 유저 수정
  @Patch()
  updateUser() {
    return '유저 수정';
  }

  // 유저 삭제
  @Delete()
  deleteUser() {
    return '유저 삭제';
  }
}
