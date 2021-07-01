import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type IUser = {
  id: number | string
  name: string
  age: string
  [key: string]: any
}

export interface IUsersState {
  token: string | null
  userInfo: IUser | null
}

const initialState: IUsersState = {
  token: null,
  userInfo: null,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.userInfo = action.payload
    },
  },
})

export const { setToken, setUser } = usersSlice.actions

export default usersSlice.reducer
