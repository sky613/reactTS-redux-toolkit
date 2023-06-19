import { createSlice } from "@reduxjs/toolkit";

interface InfoParams {
  age: number;
  name: string;
}

interface initState {
  info: InfoParams[];
  isLoading: boolean;
  error: null;
  toastMessageList: { id: string; msg: string }[];
}

const initialState: initState = {
  info: [],
  isLoading: false,
  error: null,
  toastMessageList: [],
};

export const { actions, reducer } = createSlice({
  name: "common",
  initialState,
  reducers: {
    resetStore: (state) => ({
      ...initialState,
    }),
    updateStore: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    updateInfo: (state, { payload }) => {
      state.info = payload;
    },
    //ToastMessage
    addToastMessage: (state, { payload }) => {
      state.toastMessageList = [...state.toastMessageList, payload];
    },
    removeToastMessage: (state, { payload }) => {
      state.toastMessageList = state.toastMessageList.filter(
        (v) => v.id !== payload
      );
    },
  },
});

export const { updateStore, updateInfo, addToastMessage, removeToastMessage } =
  actions;

export default reducer;
