import { configureStore } from '@reduxjs/toolkit'
import utilsSlice from './modules/utilsSlice'
import profileSlice from './modules/profileSlice'
import componentsSlice from './modules/componentsSlice'
import pageConfigSlice from './modules/pageConfigSlice'

const store = configureStore({
  reducer: {
    utils: utilsSlice,
    profile: profileSlice,
    components: componentsSlice,
    pageConfig: pageConfigSlice
  }
})

// 从 store 本身推断出 `RootState` 和 `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>
// 类型推断: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
