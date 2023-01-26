import { configureStore } from "@reduxjs/toolkit";
import TrainsReducer from "../redux/AllTrainsSlice";

const store = configureStore({
  reducer: {
    train: TrainsReducer,
  },
});

export default store;
