import { configureStore } from "@reduxjs/toolkit";
import BagStore from "./bagStore";

export const store = configureStore({
  reducer: {
    BagStore: BagStore,
  },
});

export type RootState = ReturnType<typeof store.getState>;
