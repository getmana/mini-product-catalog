'use server';

import { redirect } from 'next/navigation';

export const submitOrder = async (formData: FormData) => {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const address = formData.get('address') as string;

    const productsString = formData.get('products') as string;
    const products = JSON.parse(productsString);

    // Validation and request to API are needed here
    console.log('Sending request ==>', { name, email, address, products });

    redirect('/thank-you');
};
