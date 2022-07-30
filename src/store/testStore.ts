import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

type Test = {
  testStr: string;
  testNum: number;
};

const initialState: Test = {
  testStr: "",
  testNum: 1,
};
export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setTestStr: (state: RootState, action: PayloadAction) => {
      state.testStr = action.payload;
    },
    setTestNum: (state: RootState, action: PayloadAction) => {
      state.testNum = action.payload;
    },
  },
});

// setter
export const { setTestStr: setTestStr } = testSlice.actions;
export const { setTestNum: setTestNum } = testSlice.actions;

// getter
export const getTestStr = (state: RootState) => state.TestStore.testStr;
export const getTestNum = (state: RootState) => state.TestStore.testNum;

export default testSlice.reducer;
