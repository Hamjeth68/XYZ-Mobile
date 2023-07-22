import Constants from 'expo-constants';


export const BASE_URL = 'https://8c155025-93d6-4ead-a36d-9afdf9c1f291.mock.pstmn.io';
export const CLIENT_ID = Constants?.manifest?.extra?.CLIENT_ID;
export const CLIENT_SECRET = Constants?.manifest?.extra?.CLIENT_SECRET;
export const GRANT_TYPE = Constants?.manifest?.extra?.GRANT_TYPE;
export const SCOPE = Constants?.manifest?.extra?.SCOPE;

export const AUTHERIZED_KEY = '@authenticated';
export const AUTHERIZED_USER = '@user';
export const AUTHERIZED_TOKEN = '@token';
export const AUTHERIZED_X_TOKEN = '@xtoken';
export const AUTHERIZED_TOKEN_REFRESH_TIME = '@xtoken_time';