import Link from 'next/link';

export const ErrorMessage = ({ message }: { message: string }) => {
    return (
        <div className="container mx-auto px-4 py-10 flex flex-col gap-4 text-center">
            <p className="font-bold">OOPS something went wrong!</p>
            <p>{message}</p>
            <Link className="hover:underline" href="/">
                Go to Home Page
            </Link>
        </div>
    );
};
