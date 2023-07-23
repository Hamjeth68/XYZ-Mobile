export interface IProduct {
    id?: number | undefined;
    name?: string | undefined;
    description?: string | undefined;
    imageUrl?: string | undefined;
    price?: number | undefined;
    discount_price?: number | undefined;
    discount?: number | undefined;
    images?: string[];
    code: string | undefined;
    shortDescription?: string | undefined;
    search_url?: string | undefined;
    price_currency?: string | undefined;
    rate?: number | undefined;
    total?: number | undefined;
}

export interface IProductsResponseBody {
    code?: string | undefined;
    message?: string | undefined;
    data?: IProduct[] | undefined;
}

export interface IProductsError {
    error?: {
        message?: string | undefined;
        header?: string | undefined;
        name?: number | undefined;
    }
}