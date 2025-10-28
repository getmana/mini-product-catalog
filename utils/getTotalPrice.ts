import { OrderedProduct } from '@/context/CartContext';

export const getTotalPrice = (products: OrderedProduct[]) =>
    products.reduce((prev, current) => {
        const currentPrice = current.price * current.quantity;
        return prev + currentPrice;
    }, 0);
