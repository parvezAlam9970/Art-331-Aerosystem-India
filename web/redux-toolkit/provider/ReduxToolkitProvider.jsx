"use client";

import React from "react";
import { Provider } from "react-redux";
import store from "../store";


const ReduxToolkitProvider = ({ children }) => {
  return (
    // <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>{children}</Provider>
    // </PersistGate>
  );
};

export default ReduxToolkitProvider;
