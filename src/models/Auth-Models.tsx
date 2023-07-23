export interface IAuthRequestBody {
    email?: string;
    password?: string;
}

export interface IAuthResponse {
    accessToken?: string;
    refreshToken?: string;
}

export interface IAuthState {
    accessToken?: string | null;
    refreshToken?: string | null;

}

export interface IAuthError {
    error?: string;

}

export interface IAuthResponseError {
    error?: string;
}