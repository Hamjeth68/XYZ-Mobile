export interface IAuthRequestBody {
    email?: string;
    password?: string;
}

export interface IAuthResponseBody {
    accessToken?: string;
    refreshToken?: string;
}

export interface IAuthData {
    accessToken?: string;
    refreshToken?: string;
}

export interface IAuthError {
    error?: string;
    error_description?: string;

}
