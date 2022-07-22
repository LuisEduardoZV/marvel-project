import { configureStore } from '@reduxjs/toolkit';
import { marvelSearchApi } from '../api/marvelApi';

export const store = configureStore({
  reducer: {
    [marvelSearchApi.reducerPath]: marvelSearchApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(marvelSearchApi.middleware),
});
