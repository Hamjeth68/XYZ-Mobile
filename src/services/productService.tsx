import { AxiosResponse } from 'axios';
import { coreRequests } from '@/services/coreApi';

import { IProductsResponseBody } from '@/models/Products-Model';

export const getPaginatedProducts= (
    page: number | undefined
  ): Promise<AxiosResponse<IProductsResponseBody>> => {
    return coreRequests.get(`recommend/items?${page}`).then(res => res.data);
  };

  