import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
} from 'typeorm';

@Entity('user_favorites')
class UserFavorite {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created_time: Date;

  @Column()
  user_id: number;

  @Column()
  question_id: number;
}

export default UserFavorite;
