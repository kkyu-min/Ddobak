import { createSlice, type PayloadAction, configureStore } from '@reduxjs/toolkit'

<<<<<<< HEAD
const initialState = { value: 0, showCounter: true }
=======
import resultModalSlice from './resultModalSlice';
import pointModalSlice from './pointPayModalSlice';
import changePwModalSlice from './changePwModalSlice';
import reviewModalSlice from './reviewModalSlice';
import chargePointModalSlice from './chargePointModalSlice';
import exchangeModalSlice from './exchangeModalSlice';
import changeProfileImgModalSlice from './changeProfileImgModalSlice';
import goToBasketModalSlice from './goToBasketModalSlice';

const initialState = { value: 0, showCounter: true, showModal: false };
>>>>>>> b971c589a435c2c78b9efb464fb2383f1019f8e5

interface IncreaseAction {
  amount: number
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment (state) {
      state.value++
    },
    decrement (state) {
      state.value--
    },
    increase (state, action: PayloadAction<IncreaseAction>) {
      state.value = state.value + action.payload.amount
    },
    toggleCounter (state) {
      state.showCounter = !state.showCounter
    }
  }
})

const store = configureStore({
<<<<<<< HEAD
  reducer: { counter: counterSlice.reducer }
})
=======
  reducer: {
    resultModal: resultModalSlice.reducer,
    pointModal: pointModalSlice.reducer,
    changePwModal: changePwModalSlice.reducer,
    reviewModal: reviewModalSlice.reducer,
    chargePoint: chargePointModalSlice.reducer,
    exchangeModal: exchangeModalSlice.reducer,
    changeProfileImg: changeProfileImgModalSlice.reducer,
    goToBasket: goToBasketModalSlice.reducer,
  },
});
>>>>>>> b971c589a435c2c78b9efb464fb2383f1019f8e5

export const counterActions = counterSlice.actions
export default store
