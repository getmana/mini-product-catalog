import { Catalog } from '@/components/Catalog';
import { fetchAllProducts, type Product } from '@/api';
import { ErrorMessage } from '@/components/ErrorMessage';
import { SearchInput } from '@/components/SearchInput';

export default async function Home(props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const { data, message } = await fetchAllProducts();

  if (message) {
    return <ErrorMessage message={message} />;
  }

  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';

  const products = (data as Product[]).filter(({ title }) => title.toLowerCase().includes(query));

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-between py-32 px-8 bg-white dark:bg-black sm:items-start">
        <h1 className="font-bold py-6">Product List</h1>
        <SearchInput />
        <Catalog products={products} />
      </main>
    </div>
  );
}
