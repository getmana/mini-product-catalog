'use client';

import React, { createContext, useState, useContext } from 'react';

export type OrderedProduct = {
    id: string;
    price: number;
    quantity: number;
};

type CartContextType = {
    products: OrderedProduct[];
    setProducts: React.Dispatch<React.SetStateAction<OrderedProduct[]>>;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartContextProvider({ children }: { children: React.ReactNode }) {
    const [products, setProducts] = useState<OrderedProduct[]>([]);

    return <CartContext.Provider value={{ products, setProducts }}>{children}</CartContext.Provider>;
}

export function useCartContext() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCartContext must be used within a CartContextProvider');
    }

    return context;
}
