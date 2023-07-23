import { IProduct, IProductsError, IProductsResponseBody} from "./Products-Model";

export type IProductStateType = {
    INIT?: 'INIT';
};


export default interface IProductState {
    loading : boolean;
    error?: IProductsError;
    productData?: IProduct | {};
    status: string | undefined;
}