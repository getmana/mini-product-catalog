'use server';

import { getErrorMessage } from '@/utils';
import { ProductByIdData } from './types';
import { API_URL } from './constants';

export const fetchProductById = async (id: string): Promise<ProductByIdData> => {
    try {
        const response = await fetch(`${API_URL}/products/${id}`);
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
