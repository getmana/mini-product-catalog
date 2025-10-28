'use client';

import { useCartContext } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

export const AddProductButton = ({ id, price }: { id: string; price: number }) => {
    const { products, setProducts } = useCartContext();

    const handleAddProduct = () => {
        const cartProduct = products.find(({ id: cartId }) => cartId === id);
        const updatedProduct = cartProduct ? { ...cartProduct, quantity: cartProduct.quantity + 1 } : { id, quantity: 1, price };
        setProducts([...products.filter(({ id: cartId }) => cartId !== id), updatedProduct]);
    };

    return (
        <Button size="lg" className="hover:cursor-pointer w-full" onClick={handleAddProduct}>
            Add to cart
        </Button>
    );
};
