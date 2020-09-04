import { Product } from './product';

export interface CartDetails {
    userId?: string;
    cartDetailsId: string;
    product: Product;
    quantiity: number;
}
