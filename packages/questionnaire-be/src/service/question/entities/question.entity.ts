import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import UserFavorite from '@/service/question/entities/user-favorite.entity';
import User from '@/service/auth/entities/user.entity';
// 问卷模块实体类
@Entity()
class Question {
  @PrimaryGeneratedColumn()
  id: number; // 主键ID

  @Column({ length: 255, default: '未命名的问卷' })
  title: string; // 标题

  @Column({ length: 255, default: '暂无描述' })
  description: string; // 描述

  @Column({ default: 18 })
  author_id: number; // 作者ID

  @Column({ length: 255, default: '官方' })
  author: string; // 作者

  @Column({ default: 0 })
  answer_count: number; // 填写次数

  @CreateDateColumn()
  create_time: Date; // 创建时间

  @UpdateDateColumn()
  update_time: Date; // 更新时间

  @Column({ type: 'boolean', default: false })
  is_published: boolean; // 是否发布

  @OneToMany(() => UserFavorite, (userFavorite) => userFavorite.question_id)
  favorites: UserFavorite[];

  @OneToMany(() => User, (user) => user.id)
  owner: User;
}

export default Question;
