import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: [],
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user.push(action.payload)
    },
     logOut: (state) => {
      state.user.push([])
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser,logOut } = loginSlice.actions

export default loginSlice.reducer