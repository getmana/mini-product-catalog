'use server';

import { getErrorMessage } from '@/utils';
import { Product } from './types';

export const fetchProductById = async (id: string): Promise<{ data: Product | null; message: string | null }> => {
    try {
        const response = await fetch(`${process.env.API_URL}/products/${id}`);
        const data = await response.json();
        if (data.message) {
            return { data: null, message: data.message };
        }

        return { data, message: null };
    } catch (e: unknown) {
        const message = getErrorMessage(e);
        console.error(`Error fetching product id=${id}: ${message}`);

        return { data: null, message };
    }
};
