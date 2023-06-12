import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { asyncApiState } from "../../../redux/constants";

const initialState = {
  value: 0,
  list: asyncApiState.initial(),
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
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    getListMgt: (store, { payload }) => {
      const result = { ...(payload || {}) };
      store.list = asyncApiState.request(result);
    },
    getListMgtSuccess: (store, { payload }) => {
      const result = { ...(payload || {}) };
      store.list = asyncApiState.success(result);
    },
    getListMgtFailure: (store, { payload }) => {
      store.list = asyncApiState.error(payload);
    },
  },
});

export const {
  resetStore,
  updateStore,
  increment,
  decrement,
  incrementByAmount,
  getListMgt,
} = actions;

export default reducer;
