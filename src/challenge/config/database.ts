import { registerAs } from '@nestjs/config';

export interface ChallengeDatabaseConfig {
  type: 'postgres';
  url: string;
}

export default registerAs(
  'challengeDatabase',
  (): ChallengeDatabaseConfig => ({
    type: 'postgres',
    url: process.env.CHALLENGE_DATABASE_URL ?? '',
  }),
);
