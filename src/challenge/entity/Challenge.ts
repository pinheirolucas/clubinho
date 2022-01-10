import {
  Entity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('challenge')
export class Challenge {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'created_by', type: 'text', nullable: false })
  createdBy: string;

  @Column({ name: 'title', type: 'text', nullable: false })
  title: string;

  @Column({ name: 'description', type: 'text', nullable: false })
  description: string;

  @Column({ name: 'link', type: 'text', nullable: false })
  link: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
