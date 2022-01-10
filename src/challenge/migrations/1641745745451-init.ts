import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1641745745451 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      create table challenge (
        created_at timestamp not null default now(),
        updated_at timestamp not null default now(),
        deleted_at timestamp,

        id          uuid not null default uuid_generate_v4(),
        created_by  text not null,
        title       text not null,
        description text not null,
        link        text not null,

        primary key (id)
      )
    `);
    await queryRunner.query(`
      create table achievement (
        created_at timestamp not null default now(),

        id           uuid not null default uuid_generate_v4(),
        challenge_id uuid not null references challenge (id),

        challenger text not null,

        primary key (id)
      )
    `);
    await queryRunner.query(`
        create function refresh_updated_at()
        returns trigger as $$
        begin
          new.updated_at = now();
          return new;
        end
        $$ language plpgsql
    `);
    await queryRunner.query(`
      create trigger challenge_refresh_updated_at
      before update on challenge
      for each row
      execute procedure refresh_updated_at()
    `);
    await queryRunner.query(`
      create trigger achievement_refresh_updated_at
      before update on achievement
      for each row
      execute procedure refresh_updated_at()
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `drop trigger achievement_refresh_updated_at on achievement`,
    );
    await queryRunner.query(
      `drop trigger challenge_refresh_updated_at on challenge`,
    );
    await queryRunner.query(`drop function refresh_updated_at`);
    await queryRunner.query(`drop table achievement`);
    await queryRunner.query(`drop table challenge`);
  }
}
