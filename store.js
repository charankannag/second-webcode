import { configureStore } from "@reduxjs/toolkit";
// ROOT REDUCER
import AuthenticationReducer from "./Reducer/Authentication.reducer";
import ProductReducer from "./Reducer/Product.reducer";





export default configureStore({
  reducer: {
    authentication:AuthenticationReducer,
    product:ProductReducer,
  },
  });
