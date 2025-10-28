import Link from 'next/link';
import { CartDialog } from './CartDialog';

export const Header = () => {
    return (
        <header className="w-full">
            <div className="container flex justify-between w-full mx-auto pt-8 px-4">
                <Link href="/">HOME</Link>
                <CartDialog />
            </div>
        </header>
    );
};
