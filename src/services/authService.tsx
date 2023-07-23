import { AxiosResponse } from 'axios';
import { requests } from '@/src/services/api';
import { IAuthRequestBody, IAuthResponseBody, IAuthError } from '@/src/models/Auth-Models';



export function requestLogin(
    requestBody: IAuthRequestBody
  ): Promise<AxiosResponse<IAuthResponseBody>> {
    return requests.post('auth/login', requestBody);
}


