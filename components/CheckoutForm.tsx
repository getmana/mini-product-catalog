'use client';

import { Card, CardContent } from '@/components/ui/card';
import { useCartContext } from '@/context/CartContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ProductsTable } from './ProductsTable';
import { Button } from './ui/button';
import { submitOrder } from '@/actions/submitOrder';

// I'd go with React Hook Form and Zod Validation in real project
export const CheckoutForm = () => {
    const { products } = useCartContext();

    return (
        <Card className="max-w-md mx-auto">
            <CardContent>
                <form action={submitOrder}>
                    <input type="hidden" name="products" value={JSON.stringify(products)} />
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="name-1">Name</Label>
                            <Input id="name-1" name="name" type="text" placeholder="Your Name" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="username-1">Email</Label>
                            <Input id="username-1" type="email" name="email" placeholder="Your Email" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="address-1">Address</Label>
                            <Input id="address-1" type="text" name="address" placeholder="Your Address" />
                        </div>
                        <h2>Your Order Details:</h2>
                        <ProductsTable products={products} />
                        <Button type="submit" className="hover:cursor-pointer">
                            Confirm
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
};
