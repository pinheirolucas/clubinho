import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ChallengeController } from './challenge.controller';
import { Achievement } from './entity/Achievement';
import { Challenge } from './entity/Challenge';

@Module({
  imports: [TypeOrmModule.forFeature([Achievement, Challenge], 'challenge')],
  controllers: [ChallengeController],
})
export class ChallengeModule {}
