import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/api';
import { Card, CardAction, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

export const ProductCard = ({ product: { title, id, price, thumbnail } }: { product: Product }) => {
    return (
        <Card>
            <CardHeader>
                <div className="relative w-full aspect-[3/4] bg-muted">
                    <Image
                        src={thumbnail}
                        alt={title}
                        fill
                        className="object-contain p-2"
                        sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                    />
                </div>
            </CardHeader>
            <CardContent>
                <h2 className="font-bold">{title}</h2>
                <p>Price: {price}</p>
            </CardContent>
            <CardFooter>
                <CardAction>
                    <Link className="hover:underline" href={`/product/${id}`}>
                        View
                    </Link>
                </CardAction>
            </CardFooter>
        </Card>
    );
};
