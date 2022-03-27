import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: {counterValue: 0},
  status:  {currentStats: 'idle'},
};


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter.counterValue += 1;
    },
    decrement: (state) => {
      state.counter.counterValue -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
      state.counter.counterValue += action.payload;
    },
    incrementAsync: (state, action) =>  {
      state.status.currentStats = 'loading';
      state.counter.counterValue += action.payload;
      state.status.currentStats = 'idle'; 
   

    }
  },
});

export const { increment, decrement, incrementByAmount, incrementAsync } = counterSlice.actions;

export const selectCount = (state) => state.counter;



export default counterSlice.reducer;