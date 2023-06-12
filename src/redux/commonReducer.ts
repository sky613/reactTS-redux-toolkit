import { createSlice } from "@reduxjs/toolkit";

interface InfoParams {
  age: number;
  name: string;
}

interface initState {
  info: InfoParams[];
  isLoading: boolean;
  error: null;
}

const initialState: initState = {
  info: [],
  isLoading: false,
  error: null,
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
  },
});

export const { updateStore, updateInfo } = actions;

export default reducer;
