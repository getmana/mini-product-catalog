export type Product = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    thumbnail: string;
    images: string[];
};

export type ProductByIdData = {
    data: Product | null;
    message: string | null;
};

export type ProductsListData = {
    data: Product[] | null;
    message: string | null;
};
