"use client";

import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modalData: null,
    modalType: null,
    isModalOpen: null,
  },

  reducers: {
    openModal(state, action) {
      state.isModalOpen = true;
      state.modalData = action?.payload.data;
      state.modalType = action?.payload.type;
    },
    closeModal(state, action) {
      state.modalData = null;
      state.modalType = null;
      state.isModalOpen = null;
    },
  },
});

export const {openModal , closeModal} = modalSlice.actions
export default modalSlice.reducer