import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRandomUser = createAsyncThunk('users/fetchRandomUser', async () => {
  try {
    const response = await fetch('https://randomuser.me/api/?results=5');
    const data = await response.json();
    console.log(data.results)
  } catch (error) {
    throw Error(error);
  }
})

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },
  reducers: {

  },
  extraReducers: {
    [fetchRandomUser.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchRandomUser.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    },
    [fetchRandomUser.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    }
  },
});

export default usersSlice.reducer;
export const { users } = usersSlice.actions;