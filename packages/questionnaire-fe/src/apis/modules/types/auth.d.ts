export interface UserInfo {
  email: string
  password: string
  nickname?: string
}

export interface UserProfile {
  userInfo: {
    email: string
    nickname: string
    avatar: string
    bio: string
    createTime: string
  }
}

export interface ChangePasswordParams {
  oldPassword: string
  newPassword: string
  confirmPassword: string
}
