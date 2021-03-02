import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import uploadSlice from './features/upload/uploadSlice';

export const store = configureStore({
  reducer: {
    upload: uploadSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
