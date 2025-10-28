import { ClearCart } from '@/components/ClearCart';
import Link from 'next/link';

export default function ThankYouPage() {
    return (
        <div className="container mx-auto px-4 py-10 flex flex-col gap-4 text-center">
            <ClearCart>
                <h1 className="font-bold">Your Order was successfully sent!</h1>
                <p>Thank you!</p>
                <Link className="hover:underline" href="/">
                    Go to Home Page
                </Link>
            </ClearCart>
        </div>
    );
}
