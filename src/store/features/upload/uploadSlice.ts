import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/app';

export type FileProps = Array<{ [U: string]: string }>;

interface UploadState {
  file: FileProps | null;
  filename: string;
  error: boolean;
}

const initialState: UploadState = {
  file: null,
  filename: '',
  error: false,
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
  },
});

export const { uploadFinish } = uploadSlice.actions;

export const selectUpload = (state: RootState) => state.upload;

export default uploadSlice.reducer;
