import Image from 'next/image';
import { Card, CardTitle, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { fetchProductById, type Product } from '@/api';
import { ErrorMessage } from '@/components/ErrorMessage';
import { AddProductButton } from '@/components/AddProductButton';

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const { data, message } = await fetchProductById(id);

    if (message) {
        return <ErrorMessage message={message} />;
    }

    const { title, images, category, price, description } = data as Product;

    return (
        <div className="container mx-auto px-4 py-10">
            <Card className="max-w-3xl mx-auto shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative w-full aspect-[3/4] bg-muted rounded-md overflow-hidden">
                        <Image src={images[0]} alt={title} fill className="object-contain" sizes="(max-width: 768px) 100vw, 50vw" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="space-y-2">
                            <p className="text-sm text-muted-foreground">{category}</p>
                            <p className="text-xl font-bold">${price}</p>
                            <p className="text-sm leading-relaxed">{description}</p>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <AddProductButton id={id} price={price} />
                </CardFooter>
            </Card>
        </div>
    );
}
