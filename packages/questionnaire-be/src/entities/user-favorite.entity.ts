import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  Column,
} from 'typeorm';
import User from '@/entities/user.entity';
import Question from '@/entities/question.entity';

@Entity('user_favorites')
class UserFavorite {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.favorites)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Question, (question) => question.favorites)
  @JoinColumn({ name: 'question_id' })
  question: Question;

  @CreateDateColumn()
  created_time: Date;

  @Column()
  user_id: number;

  @Column()
  question_id: number;
}

export default UserFavorite;
