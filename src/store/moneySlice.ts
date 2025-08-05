import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { MoneyState } from '@/types'

const initialState: MoneyState = {
  amount: 0,
}

export const moneySlice = createSlice({
  name: 'money',
  initialState,
  reducers: {
    addMoney: (state, action: PayloadAction<number>) => {
      state.amount += action.payload
    },
    subtractMoney: (state, action: PayloadAction<number>) => {
      state.amount -= action.payload
    },
    setMoney: (state, action: PayloadAction<number>) => {
      state.amount = action.payload
    },
  },
})

export const { addMoney, subtractMoney, setMoney } = moneySlice.actions
export default moneySlice.reducer