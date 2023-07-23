import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import IStartupState from "@/src/models/Auth-State-Model";

import { IAuthRequestBody, IAuthResponseBody, IAuthError,  } from "@/src/models/Auth-Models";
import { AxiosError } from "axios";
import { STATUS } from "@/src/constatnts";
import { RootState } from "@/src/redux/store";
import { setAccessToken, removeApiAccessToken } from "@/src/services/api";

import { STORE_INSTANCE } from "../../../App";
import { getPaginatedProducts } from "@/src/services/productService";
import IProductState from "@/models/Products-State-Model";
import { IProduct, IProductsError } from "@/models/Products-Model";



const DEFAULT_STATE: IProductState = {
    loading: false,
    error: undefined,
    productData: {},
    status: undefined
};

const INITAL_STATE: IProductState = {
    ...DEFAULT_STATE,
    status: "INIT",

}

export const getUserInfo = createAsyncThunk(
    'profile/getUserInfo',
    async (page: number | undefined, { rejectWithValue }) => {
      try {
        const response = await getPaginatedProducts(page);
        console.log("response-------", response);
        return response.data;
      } catch (err: any) {
        const error: AxiosError<IProductsError> = err; // cast the error for access
        if (!error) {
          throw err;
        }
        // We got validation errors, let's return those so we can reference in our component and set form errors
        return rejectWithValue(error);
      }
    }
  );


  const productSlice = createSlice({
    name: 'productSlice',
    initialState: INITAL_STATE,
    reducers: {
        resetStatus: (state, action: PayloadAction<void>) => {
            return { ...state, status: STATUS.IDLE };
          },
          resetProfile: (state, action: PayloadAction<void>) => {
            return { ...state, ...INITAL_STATE };
          },
          setProduct: (state: IProductState, action) => {
            return {
              ...state,
             productData: action.payload,
             
            };
          },

    },
    extraReducers: (builder) => {
        builder.addCase(getUserInfo.pending, (state) => {
          return {
            ...state,
            loading: true,
            error: undefined,
            status: STATUS.PENDING,
          };
        });
        builder.addCase(getUserInfo.fulfilled, (state, action) => {
          return {
            ...state,
            loading: false,
            error: undefined,
            status: STATUS.FULFILLED,
            productData: action.payload,
          };
        });
        builder.addCase(getUserInfo.rejected, (state, action) => {
          return {
            ...state,
            loading: false,
            error: action.payload as IProductsError,
            status: STATUS.REJECTED,
          };
        });
    },
  });


  export const { resetStatus, resetProfile, setProduct } = productSlice.actions;

 export const selectProduct = (state: RootState) => state.product.productData;

 export default productSlice.reducer;