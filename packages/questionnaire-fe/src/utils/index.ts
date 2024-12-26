import {
  EMAIL_KEY,
  LOGIN_STATE,
  LOGIN_STATE_KEY,
  PASSWORD_KEY,
  TOKEN_KEY,
  USERINFO_KEY
} from '@/constant'

export type UserInfo = Partial<{
  userId: number
  avatar: string
  nickname: string
}>

export const rememberUser = (email: string, password: string) => {
  localStorage.setItem(EMAIL_KEY, email)
  localStorage.setItem(PASSWORD_KEY, password)
}

export const deleteUserFromStorage = () => {
  localStorage.removeItem(EMAIL_KEY)
  localStorage.removeItem(PASSWORD_KEY)
}

export const getUserFromStorage = () => {
  return {
    email: localStorage.getItem(EMAIL_KEY),
    password: localStorage.getItem(PASSWORD_KEY)
  }
}

export const setTokenStorage = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token)
}

export const getTokenFromStorage = () => {
  return localStorage.getItem(TOKEN_KEY)
}

export const deleteTokenFromStorage = () => {
  localStorage.removeItem(TOKEN_KEY)
}

export const login = () => {
  localStorage.setItem(LOGIN_STATE_KEY, LOGIN_STATE.LOGIN)
}

export const logout = () => {
  localStorage.setItem(LOGIN_STATE_KEY, LOGIN_STATE.LOGOUT)
  deleteTokenFromStorage()
  deleteUserInfoStorage()
}

export const getLoginState = () => {
  return localStorage.getItem(LOGIN_STATE_KEY)
}

export const getUserInfoFromStorage = (): UserInfo => {
  return JSON.parse(localStorage.getItem(USERINFO_KEY) || '{}')
}

export const setUserInfoStorage = (userInfo: UserInfo) => {
  localStorage.setItem(USERINFO_KEY, JSON.stringify(userInfo))
}

export const deleteUserInfoStorage = () => {
  localStorage.removeItem(USERINFO_KEY)
}

// 防抖
export const debounce = <T extends (...args: any[]) => void>(fn: T, delay: number): T => {
  let timer: NodeJS.Timeout | null = null
  return function (this: any, ...args: Parameters<T>) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  } as T
}

// 节流
export const throttle = <T extends (...args: any[]) => void>(fn: T, delay: number): T => {
  let timer: NodeJS.Timeout | null = null
  return function (this: any, ...args: Parameters<T>) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = null
      }, delay)
    }
  } as T
}
