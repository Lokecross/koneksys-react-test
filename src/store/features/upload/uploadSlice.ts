import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/app';

export type FileItemProps = { [U: string]: string };
export type FileProps = Array<FileItemProps>;

interface UploadState {
  modal: boolean;
  file: FileProps | null;
  filename: string;
  error: boolean;
  name: string;
  favorite: string;
}

const initialState: UploadState = {
  modal: false,
  file: null,
  filename: '',
  error: false,
  name: '',
  favorite: '',
};

export const uploadSlice = createSlice({
  name: 'upload',
  initialState,
  reducers: {
    toggleModal: state => {
      state.modal = !state.modal;
    },
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
    changeFavorite: (state, action: PayloadAction<string>) => {
      state.favorite = action.payload;
    },
    clearUpload: state => {
      state.file = initialState.file;
      state.filename = initialState.filename;
      state.error = initialState.error;
      state.name = initialState.name;
      state.favorite = initialState.favorite;
    },
  },
});

export const {
  toggleModal,
  uploadFinish,
  changeName,
  changeStatus,
  changeFavorite,
  clearUpload,
} = uploadSlice.actions;

export const selectUpload = (state: RootState) => state.upload;

export default uploadSlice.reducer;
