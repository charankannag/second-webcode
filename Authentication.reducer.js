import { createSlice } from "@reduxjs/toolkit";


export const AuthenticationReducer = createSlice({
  name: "authentication",
  initialState: {
    islanding:false,
    user:null,
  },
  reducers: {
    savelandinguser: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library, 
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      
      if (action.payload&&action.payload.userName) {
        state.user=action.payload;
        state.islanding=true
      }
    },
     },
  });

// Action creators are generated for each case reducer function
export const { savelandinguser } = AuthenticationReducer.actions;
export default AuthenticationReducer.reducer;
