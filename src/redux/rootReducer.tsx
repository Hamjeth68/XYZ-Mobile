import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./reducer/authSlice";
import productSlice from "./reducer/productSlice";
const rootReducer = combineReducers({
    auth: authSlice,
    product: productSlice
});


export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;