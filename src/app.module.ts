import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BankModule } from './bank/bank.module';
import { ChallengeModule } from './challenge/challenge.module';
import challengeDatabaseConfig, {
  ChallengeDatabaseConfig,
} from './challenge/config/database';
import { Achievement } from './challenge/entity/Achievement';
import { Challenge } from './challenge/entity/Challenge';
import configuration from './configuration';
import { ShoppingModule } from './shopping/shopping.module';

@Module({
  imports: [
    BankModule,
    ChallengeModule,
    ShoppingModule,
    ConfigModule.forRoot({
      load: [configuration, challengeDatabaseConfig],
    }),
    TypeOrmModule.forRootAsync({
      name: 'challenge',
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        const challengeDatabaseConfig =
          config.get<ChallengeDatabaseConfig>('challengeDatabase');

        return {
          type: challengeDatabaseConfig?.type,
          url: challengeDatabaseConfig?.url,
          entities: [Challenge, Achievement],
        };
      },
    }),
  ],
})
export class AppModule {}
