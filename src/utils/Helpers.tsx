import { Platform } from "react-native";
import {
    AUTHERIZED_KEY,
    AUTHERIZED_TOKEN,
    AUTHERIZED_USER,
    AUTHERIZED_X_TOKEN,
    AUTHERIZED_TOKEN_REFRESH_TIME,
  } from '../constatnts';
import  storage  from "./asyncStorage";
import { resetStartUpState } from "../redux/reducer/authSlice";
import { AppDispatch } from "../redux/store";

export const isIos = Platform.OS === 'ios' ? true : false;


export const logOut = async (dispatch: AppDispatch): Promise<void> => {
    const remove = await storage
      .removeValue(AUTHERIZED_KEY)
      .then(() => {
        storage.removeValue(AUTHERIZED_USER);
        storage.removeValue(AUTHERIZED_X_TOKEN);
        storage.removeValue(AUTHERIZED_TOKEN_REFRESH_TIME);
        return storage.removeValue(AUTHERIZED_TOKEN);
      })
      .catch(err => console.error(err));
    if (remove) {
      dispatch(resetStartUpState());
    }
  };