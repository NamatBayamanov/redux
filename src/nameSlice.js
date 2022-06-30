import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice(
  {
    name: "Bakyt", // counter/increment
    initialState: {
      name: "Bakyt",
      // name: "",
    },
    reducers: {
      change: function (store, action) {
        store.name = "Bakyt"
        // store.number += 1; 
      }
    }
  }
);

export default nameSlice.reducer;