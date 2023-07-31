import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: "dark",
  numProfilePosts : 0
}

export const  appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark"
    },
    setNumProfilePosts: (state, action) => {
      state.numProfilePosts = action.payload
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { toggleTheme, setNumProfilePosts } = appSlice.actions

export default appSlice.reducer