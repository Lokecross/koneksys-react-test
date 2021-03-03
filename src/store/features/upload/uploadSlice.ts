import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/app';

export type FileProps = Array<{ [U: string]: string }>;

interface UploadState {
  file: FileProps | null;
  filename: string;
  error: boolean;
  name: string;
}

const initialState: UploadState = {
  file: null,
  filename: '',
  error: false,
  name: '',
};

export const uploadSlice = createSlice({
  name: 'upload',
  initialState,
  reducers: {
    uploadFinish: (
      state,
      action: PayloadAction<{
        file: FileProps;
        filename: string;
        error: boolean;
      }>,
    ) => {
      state.file = action.payload.file;
      state.filename = action.payload.filename;
      state.error = action.payload.error;
    },
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    changeStatus: (
      state,
      action: PayloadAction<{ player: string; status: string }>,
    ) => {
      const index = state.file?.findIndex(
        item => item['#'] === action.payload.player,
      );

      if (state.file) {
        state.file[index as number].Status = action.payload.status;
      }
    },
  },
});

export const { uploadFinish, changeName, changeStatus } = uploadSlice.actions;

export const selectUpload = (state: RootState) => state.upload;

export default uploadSlice.reducer;
