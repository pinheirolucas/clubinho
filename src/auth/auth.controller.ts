import { Controller, Post, UseGuards } from '@nestjs/common';

import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { Public } from './public.decorator';
import { User } from './user.decorator';

@Public()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async signin(@User() user: any) {
    return this.authService.login(user);
  }

  @Post('signup')
  async signup() {
    return 'huehuehue';
  }
}
