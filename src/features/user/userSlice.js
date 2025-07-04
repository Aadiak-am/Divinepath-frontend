// src/features/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: null, // { name, email, token }
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setuserDetails: (state, action) => {
      state.userInfo = action.payload;
    },
    logout: (state) => {
      state.userInfo = null;
    },
  },
});

export const { setuserDetails, logout } = userSlice.actions;
export default userSlice.reducer;
