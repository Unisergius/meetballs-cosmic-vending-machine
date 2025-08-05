import { configureStore } from '@reduxjs/toolkit'
import moneyReducer from './moneySlice'
import itemsReducer from './itemsSlice'

export const store = configureStore({
  reducer: {
    money: moneyReducer,
    items: itemsReducer,
  },
})

import type { RootState } from '@/types'
export type { RootState }
export type AppDispatch = typeof store.dispatch