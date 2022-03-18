import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1644443160692 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      create table user (
        created_at   timestamp not null default now(),
        updated_at   timestamp not null default now(),
        activated_at timestamp,
        deleted_at   timestamp,

        id       uuid not null default uuid_generate_v4(),
        email    text not null,
        password text not null,
        name     text not null,

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
      create trigger user_refresh_updated_at
      before update on user
      for each row
      execute procedure refresh_updated_at()
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`drop trigger user_refresh_updated_at on user`);
    await queryRunner.query(`drop function refresh_updated_at`);
    await queryRunner.query(`drop table user`);
  }
}
