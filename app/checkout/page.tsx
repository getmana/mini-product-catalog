import { CheckoutForm } from '@/components/CheckoutForm';

export default async function Checkout() {
    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-center pb-8">Confirm Your Order</h1>
            <CheckoutForm />
        </div>
    );
}
