import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice(
  {
    name: "counter", // counter/increment
    initialState: {
      number: 0,
      // name: "",
    },
    reducers: {
      increment: function (store) {
        store.number++;
        // store.number += 1; 
      },



      decrement: function (store) {
        store.number--;
        // store.number += 1; 
      },
      reset: function (store) {
        store.number = 0;
        // store.number += 1; 
      },
      set: function (store, action) {

        console.log(action);
        store.number = action.payload;
        // store.number += 1; 
      },
    }
  }
);

export default counterSlice.reducer;