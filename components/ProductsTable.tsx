import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { OrderedProduct } from '@/context/CartContext';
import { getTotalPrice } from '@/utils';

export const ProductsTable = ({ products }: { products: OrderedProduct[] }) => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Product ID</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {products.map(({ id, price, quantity }) => (
                    <TableRow key={id}>
                        <TableCell className="font-medium">{id}</TableCell>
                        <TableCell>{quantity}</TableCell>
                        <TableCell>{price}</TableCell>
                        <TableCell className="text-right">{price * quantity}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">{getTotalPrice(products)}</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    );
};
