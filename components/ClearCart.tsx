'use client';

import { useCartContext } from '@/context/CartContext';
import { useEffect } from 'react';

export const ClearCart = ({ children }: { children: React.ReactNode }) => {
    const { setProducts } = useCartContext();

    useEffect(() => {
        setProducts([]);
    }, []);

    return <>{children}</>;
};
