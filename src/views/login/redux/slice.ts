import { createSlice } from "@reduxjs/toolkit";

import { asyncApiState } from "../../../redux/constants";

const initialState = {
  login: asyncApiState.initial(),
};

export const { actions, reducer } = createSlice({
  name: "listMgt",
  initialState,
  reducers: {
    resetStore: (store, { payload }) => ({
      ...initialState,
    }),
    updateStore: (store, { payload }) => ({
      ...store,
      ...payload,
    }),
    postLogin: (store, { payload }) => {
      const result = { ...(payload || {}) };
      store.login = asyncApiState.request(result);
    },
    postLoginSuccess: (store, { payload }) => {
      const result = { ...(payload || {}) };
      store.login = asyncApiState.success(result);
    },
    postLoginFailure: (store, { payload }) => {
      store.login = asyncApiState.error(payload);
    },
  },
});

export const { resetStore, updateStore, postLogin } = actions;

export default reducer;
