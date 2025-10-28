import { OrderedProduct } from '@/context/CartContext';

export const getTotalNumber = (products: OrderedProduct[]) => products.reduce((prev, current) => prev + current.quantity, 0);
