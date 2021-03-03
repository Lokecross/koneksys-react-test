import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'store/app';

import { FileProps } from '../upload/uploadSlice';

interface TeamState {
  file: FileProps | null;
  name: string;
  favorite: string;
}

const initialState: TeamState = {
  file: null,
  name: '',
  favorite: '',
};

export const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    teamConfirm: (
      state,
      action: PayloadAction<{
        file: FileProps;
        name: string;
        favorite: string;
      }>,
    ) => {
      state.file = action.payload.file;
      state.name = action.payload.name;
      state.favorite = action.payload.favorite;
    },
  },
});

export const { teamConfirm } = teamSlice.actions;

export const selectTeam = (state: RootState) => state.team;

export default teamSlice.reducer;
