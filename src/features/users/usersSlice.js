import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = 'https://randomuser.me/api/?results=50'

const initialState = {
  randomUsers: [],
  isLoading: true
}

export const getUsers = createAsyncThunk('users/getUsers', 
  () => {
    return fetch(url)
      .then((res) => res.json())
      .catch((err) => console.log(err))
  }
)

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.isLoading = true
    },
    [getUsers.fulfilled]: (state, action) => {
      state.randomUsers = action.payload
      state.isLoading = false
      //console.log(state.randomUsers)
    },
    [getUsers.rejected]: (state) => {
      state.isLoading = false
    }
  }
})

export default usersSlice.reducer