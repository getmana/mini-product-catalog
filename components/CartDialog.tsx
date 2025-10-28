'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { ShoppingCart } from 'lucide-react';
import { useCartContext } from '@/context/CartContext';
import { ProductsTable } from './ProductsTable';
import { getTotalNumber } from '@/utils';

export const CartDialog = () => {
    const { products } = useCartContext();

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="link" className="hover:cursor-pointer">
                    <ShoppingCart className="size-8" />
                    <span>{getTotalNumber(products)}</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Your Cart</DialogTitle>
                    <DialogDescription>Check yor order here</DialogDescription>
                </DialogHeader>
                {products.length ? <ProductsTable products={products} /> : <p>Your Cart is empty yet!</p>}
                <DialogFooter>
                    <DialogClose asChild>
                        <Button asChild variant="outline">
                            <Link href="/checkout">Go to Checkout</Link>
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
