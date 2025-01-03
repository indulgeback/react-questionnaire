export interface UserInfo {
  email: string
  password: string
  nickname?: string
}

export interface UserProfile {
  email: string
  nickname: string
  avatar: string
  bio: string
  createTime: string
}
