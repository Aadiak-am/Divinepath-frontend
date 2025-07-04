// src/features/api/apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api', // optional, can be customized
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }), // Change later if needed
  endpoints: (builder) => ({}),
});
