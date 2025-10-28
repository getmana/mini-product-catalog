'use server';

import { getErrorMessage } from '@/utils';
import { Product } from './types';

export const fetchAllProducts = async (): Promise<{ data: Product[] | null; message: string | null }> => {
    try {
        const response = await fetch(`${process.env.API_URL}/products`);
        const data = await response.json();
        if (data.message) {
            return { data: null, message: data.message };
        }

        return { data: data.products, message: null };
    } catch (e: unknown) {
        const message = getErrorMessage(e);
        console.error(`Error fetching products: ${message}`);

        return { data: null, message };
    }
};
