import { ProductCard } from './ProductCard';
import { type Product } from '@/api';

export const Catalog = ({ products }: { products: Product[] }) => {
    return (
        <div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
                <ProductCard product={product} key={product.id} />
            ))}
        </div>
    );
};
