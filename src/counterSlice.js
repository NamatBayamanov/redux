import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice(
  {
    name: "counter",
    initialState: {
      number: 0,
      // name: "",
    },
    reducers: {
      increment: function (store) {
        store.number++;
        // store.number += 1; 
      },
    }
  }
);

export default counterSlice.reducer;