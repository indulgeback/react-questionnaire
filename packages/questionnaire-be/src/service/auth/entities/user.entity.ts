import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// 问卷模块实体类
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number; // 主键ID

  @Column({ length: 255, unique: true })
  email: string; // 邮箱

  @Column({ length: 255 })
  password: string; // 密码

  @Column({ length: 255 })
  nickname: string; // 昵称
}
