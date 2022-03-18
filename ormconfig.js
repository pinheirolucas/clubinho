module.exports = [
  {
    name: 'challenge',
    type: 'postgres',
    url: process.env.CHALLENGE_DATABASE_URL,
    entities: ['dist/challenge/entity/*.js'],
    migrations: ['dist/challenge/migrations/*.js'],
    cli: {
      entitiesDir: 'src/challenge/entity',
      migrationsDir: 'src/challenge/migrations',
    },
  },
  {
    name: 'auth',
    type: 'postgres',
    url: process.env.AUTH_DATABASE_URL,
    entities: ['dist/auth/entity/*.js'],
    migrations: ['dist/auth/migrations/*.js'],
    cli: {
      entitiesDir: 'src/auth/entity',
      migrationsDir: 'src/auth/migrations',
    },
  },
];
