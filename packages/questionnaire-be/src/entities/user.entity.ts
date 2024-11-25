import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import UserFavorite from '@/entities/user-favorite.entity';

// 问卷模块实体类
@Entity()
class User {
  @PrimaryGeneratedColumn()
  id: number; // 主键ID

  @Column({ length: 255, unique: true })
  email: string; // 邮箱

  @Column({ length: 255 })
  password: string; // 密码

  @Column({ length: 255 })
  nickname: string; // 昵称

  @CreateDateColumn()
  create_time: Date; // 注册时间

  @Column({ nullable: true })
  avatar: string; // 头像 URL

  @Column({ type: 'text', nullable: true })
  bio: string; // 个人简介

  @OneToMany(() => UserFavorite, (userFavorite) => userFavorite.user)
  favorites: UserFavorite[];
}
export default User;
