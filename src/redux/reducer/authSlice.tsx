import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import IStartupState from "@/src/models/Auth-State-Model";

import { IAuthRequestBody, IAuthResponseBody, IAuthError,  } from "@/src/models/Auth-Models";
import { AxiosError } from "axios";
import { STATUS } from "@/src/constatnts";
import { RootState } from "@/src/redux/store";
import { setAccessToken, removeApiAccessToken } from "@/src/services/api";

import { STORE_INSTANCE } from "../../../App";
import { requestLogin } from "@/src/services/authService";
import { logOut } from "@/src/utils/Helpers";



const DEFAULT_STATE: IStartupState = {
    authenticated: false,
    loading: false,
    screen: "INIT",
    error: undefined,
    authData: {},
    status: undefined
};

const INITAL_STATE: IStartupState = {
    ...DEFAULT_STATE,
    authenticated: undefined,
    screen: "INIT",
}

export const requestUserLogin = createAsyncThunk(
    "auth/login",
    // if you type your function argument here
    async (body: IAuthRequestBody, { rejectWithValue }) => {
      try {
        const response = await requestLogin(body);
        console.log("responserequestUserLogin-------", response);
        return response;
      } catch (err: any) {
        const error: AxiosError<IAuthError> = err; // cast the error for access
        if (!error) {
          throw err;
        }
        // We got validation errors, let's return those so we can reference in our component and set form errors
        return rejectWithValue(error);
      }
    }
  );

const authSlice = createSlice({
    name: "auth",
    initialState: INITAL_STATE,
    reducers: {
        resetStartUp: () => {
            removeApiAccessToken();
            return DEFAULT_STATE;
        },
        resetStatus: (state: IStartupState) => {
            return {...state, status: STATUS.IDLE}
        },

        setAuthentication: (
            state: IStartupState,
            action: PayloadAction<{ isAuthenticated: boolean }>
          ): IStartupState => {
            if (!action.payload.isAuthenticated) {
              logOut(STORE_INSTANCE.dispatch);
              return DEFAULT_STATE;
            }
            return {
              ...state,
              loading: false,
              authenticated: action.payload.isAuthenticated,
              screen: "AUTHENTICATED",
            };
          },
          setTokenData: (state: IStartupState, action: PayloadAction<object>) => {
            return { ...state, authData: action.payload };
          },
          setAppLoading: (state: IStartupState, action: PayloadAction<boolean>) => {
            return { ...state, loading: action.payload };
          },

    },
    extraReducers: (builder) => {
        builder.addCase(requestUserLogin.pending, (state: IStartupState) => {
            state.status = STATUS.LOADING;
        });
        builder.addCase(requestUserLogin.fulfilled, (state: IStartupState, action) => {
            state.authData = action.payload;
            state.status = STATUS.SUCCEEDED
        });
        builder.addCase(requestUserLogin.rejected, (state: IStartupState,action )=>{
            if(action.error){
                state.error = action.payload;
            }
            state.status  = STATUS.FAILED
        })
    }
}); 

export const selectAuthData = (state: RootState) => state.auth

export const {
    resetStartUp,
    setAppLoading,
    setAuthentication,
    setTokenData
} = authSlice.actions

export default authSlice.reducer;