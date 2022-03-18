import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'email', unique: true, nullable: false })
  email: string;

  @Column({ name: 'password', type: 'text', nullable: false })
  password: string;

  @Column({ name: 'name', type: 'text', nullable: false })
  name: string;

  @Column({ name: 'activated_at', type: 'timestamp' })
  activatedAt: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
