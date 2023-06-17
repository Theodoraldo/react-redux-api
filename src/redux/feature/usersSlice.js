import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://randomuser.me/api/?results=5';

export const fetchRandomUser = createAsyncThunk(
  'users/fetchRandomUser',
  async (_, thunkAPI) => {
    try {
      const response = await axios(URL);
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
      state.isLoading = false;
      state.error = true;
    }
  },
});

export default usersSlice.reducer;
export const { users } = usersSlice.actions;