import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Achievement } from './achievement.entity';
import { Challenge } from './challenge.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Achievement, Challenge], 'challenge')],
})
export class ChallengeModule {}
