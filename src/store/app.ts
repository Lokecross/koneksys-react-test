import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import uploadSlice from './features/upload/uploadSlice';
import teamSlice from './features/team/teamSlice';

export const store = configureStore({
  reducer: {
    upload: uploadSlice,
    team: teamSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
