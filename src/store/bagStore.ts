import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

type Bag = {
  bagPokemonList: number[];
};

const initialState: Bag = {
  bagPokemonList: [],
};
export const bagSlice = createSlice({
  name: "bag",
  initialState,
  reducers: {
    setPokemon: (state, action: PayloadAction<number>) => {
      state.bagPokemonList = [...state.bagPokemonList, action.payload];
    },
    deletePokemon: (state, action: PayloadAction<number>) => {
      state.bagPokemonList = state.bagPokemonList.filter(
        (_id, index) => action.payload !== index
      );
    },
    resetPokemon: (state) => {
      state.bagPokemonList = [];
    },
  },
});

// setter
export const { setPokemon: setPokemon } = bagSlice.actions;
export const { deletePokemon: deletePokemon } = bagSlice.actions;
export const { resetPokemon: resetPokemon } = bagSlice.actions;

// getter
export const getBagPokemonList = (state: RootState) =>
  state.BagStore.bagPokemonList;

export default bagSlice.reducer;
