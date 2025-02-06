import { RootState } from '@/store'
import { useDispatch, useSelector } from 'react-redux'
import { defaultAvatarList } from '@/constant/defaultDataConstant'
import { useEffect } from 'react'
import { setDefaultAvatar } from '@/store/modules/profileSlice'

export const useAvatar = () => {
  const userInfo = useSelector((state: RootState) => state.profile.userInfo)
  const defaultAvatar = useSelector((state: RootState) => state.profile.defaultAvatar)

  const dispatch = useDispatch()

  useEffect(() => {
    if (!defaultAvatar && !userInfo.avatar) {
      const randomAvatar = defaultAvatarList[Math.floor(Math.random() * defaultAvatarList.length)]
      dispatch(setDefaultAvatar(randomAvatar))
    }
  }, [dispatch, defaultAvatar, userInfo.avatar])

  return {
    avatar: userInfo.avatar || defaultAvatar || ''
  }
}
