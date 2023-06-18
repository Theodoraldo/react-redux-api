import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://randomuser.me/api/?results=5';

export const fetchRandomUser = createAsyncThunk(
  'users/fetchRandomUser',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(URL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        'An error has occurred while getting data'
      );
    }
  }
);


const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: {},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchRandomUser.pending]: (state) => {
      state.isLoading = true;
    },

    [fetchRandomUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users.usersS = action.payload;
    },

    [fetchRandomUser.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export default usersSlice.reducer;
export const { users } = usersSlice.actions;