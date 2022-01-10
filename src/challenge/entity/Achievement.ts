import {
  Entity,
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Challenge } from './Challenge';

@Entity('achievement')
export class Achievement {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'challenger', type: 'text', nullable: false })
  challenger: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ManyToOne(() => Challenge)
  @JoinColumn({ name: 'challenge_id', referencedColumnName: 'id' })
  challenge: Challenge;
}
