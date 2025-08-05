import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { ItemsState } from '@/types'

const initialState: ItemsState = {
  list: [
    { id: '01', name: 'Martian Fizz', price: 3.50, quantity: 5 },
    { id: '02', name: 'Nebula Nectar', price: 3.50, quantity: 5 },
    { id: '03', name: 'Asteroid Ale', price: 3.50, quantity: 5 },
    { id: '04', name: 'Space Dust Chips', price: 2.75, quantity: 8 },
    { id: '05', name: 'Meteor Munchies', price: 2.75, quantity: 8 },
    { id: '06', name: 'Galaxy Gummies', price: 2.50, quantity: 10 },
    { id: '07', name: 'Cosmic Crunch Bar', price: 2.50, quantity: 10 },
    { id: '08', name: 'Starburst Bites', price: 2.50, quantity: 10 },
  ],
  selectedId: null
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    selectItem: (state, action: PayloadAction<string>) => {
      const itemExists = state.list.find(item => item.id === action.payload);
      state.selectedId = itemExists ? action.payload : null;
    },
    clearSelection: (state) => {
      state.selectedId = null;
    },
    purchaseItem: (state, action: PayloadAction<string>) => {
      const item = state.list.find(item => item.id === action.payload);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
      }
    },
  },
});

export const { selectItem, clearSelection, purchaseItem } = itemsSlice.actions;
export default itemsSlice.reducer;