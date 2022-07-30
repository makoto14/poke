import { configureStore } from "@reduxjs/toolkit";
import TestStore from "./testStore";

export const store = configureStore({
  reducer: {
    TestStore: TestStore,
  },
});

export type RootState = ReturnType<typeof store.getState>;
