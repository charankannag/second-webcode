import { createSlice } from "@reduxjs/toolkit";


export const ProductReducer = createSlice({
  name: "product",
  initialState: {
    data:[],
  },
  reducers: {
    saveproduct: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library, 
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log(state,action);
      //if (action.payload) {
       // state.tasks.push(action.payload);
      //}
    //},
    // deleteTodo: (state, action) => {
    //   // state.value -= 1
    //   console.log(action);
    // },
  },
},
});


// Action creators are generated for each case reducer function
export const { saveproduct } = ProductReducer.actions;
export default ProductReducer.reducer;
