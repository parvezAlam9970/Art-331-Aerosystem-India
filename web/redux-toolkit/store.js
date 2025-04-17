"use client";

import { configureStore } from "@reduxjs/toolkit";

import modalReducer from "./slices/modal/modalSlices";

const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

export default store;
