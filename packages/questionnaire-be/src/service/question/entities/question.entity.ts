import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// 问卷模块实体类
@Entity()
export class Question {
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

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  create_time: Date; // 创建时间

  @Column({ type: 'boolean', default: false })
  is_published: boolean; // 是否发布

  @Column({ type: 'boolean', default: false })
  is_star: boolean; // 是否收藏

  @Column({ type: 'boolean', default: false })
  is_deleted: boolean; // 是否删除
}
