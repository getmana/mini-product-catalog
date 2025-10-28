'use server';

import { getErrorMessage } from '@/utils';
import { ProductsListData } from './types';
import { API_URL } from './constants';

export const fetchAllProducts = async (): Promise<ProductsListData> => {
    try {
        const response = await fetch(`${API_URL}/products`);
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
