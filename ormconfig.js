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
];
