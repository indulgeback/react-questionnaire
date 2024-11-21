import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import UserFavorite from '@/entities/user-favorite.entity';

// 问卷模块实体类
@Entity()
class Question {
  @PrimaryGeneratedColumn()
  id: number; // 主键ID

  @Column({ length: 255 })
  title: string; // 标题

  @Column({ length: 255, default: '暂无描述' })
  description: string; // 描述

  @Column({ length: 255, default: '官方' })
  author: string; // 作者

  @Column()
  answer_count: number; // 填写次数

  @CreateDateColumn()
  create_time: Date; // 创建时间

  @UpdateDateColumn()
  update_time: Date; // 更新时间

  @Column({ type: 'boolean', default: false })
  is_published: boolean; // 是否发布

  @OneToMany(() => UserFavorite, (userFavorite) => userFavorite.user)
  favorites: UserFavorite[];
}

export default Question;
