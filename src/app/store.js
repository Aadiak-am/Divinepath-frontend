// src/app/store.js
import 
 { configureStore } from '@reduxjs/toolkit';
// import your reducers here
import userReducer from '../features/user/userSlice'; // example

const store = configureStore({
  reducer: {
    user: userReducer,
    // other reducers
  },
});

export default store;
