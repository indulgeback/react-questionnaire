import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// 问卷模块实体类
@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number; // 主键ID

  @Column()
  title: string; // 标题

  @Column()
  answerCount: string; // 填写次数

  @Column()
  createTime: string; // 创建时间

  @Column()
  isPublished: boolean; // 是否发布

  @Column()
  isStar: boolean; // 是否收藏

  @Column()
  isDeleted: boolean; // 是否删除
}
