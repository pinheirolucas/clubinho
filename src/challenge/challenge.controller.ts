import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { AchieveChallengeDto } from './dto/achieve-challenge.input';

import { CreateChallengeDto } from './dto/create-challenge.input';

@Controller('challenge')
export class ChallengeController {
  @Post()
  create(@Body() createChallengeDto: CreateChallengeDto) {
    // return
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    // return
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    // return
  }

  @Post(':id/achieve')
  achieve(
    @Param('id', ParseIntPipe) id: number,
    @Body() achieveChallengeDto: AchieveChallengeDto,
  ) {
    // return
  }
}
