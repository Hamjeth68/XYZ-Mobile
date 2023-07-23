import { IAuthData,IAuthError, IAuthRequestBody } from "./Auth-Models";


export type StartupStateType = {
    INIT?: 'INIT';
    AUTHENTICATED?: 'AUTHENTICATED';
    LOGGED_OUT?: 'LOGGED_OUT';
};

export default interface IStartupState {
    authenticated: boolean | undefined;
    loading : boolean;
    screen: StartupStateType[keyof StartupStateType];
    error?: IAuthError;
    authData?: IAuthData | {};
    status: string | undefined;
}