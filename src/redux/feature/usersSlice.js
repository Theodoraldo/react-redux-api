import { createSlice } from '@reduxjs/toolkit';

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

  },
});

export default usersSlice.reducer;
export const { users } = usersSlice.actions;