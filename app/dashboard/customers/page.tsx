import { fetchCostumersPages } from '@/app/lib/data';
import { AddUser } from '@/app/ui/customers/button';
import { DialogAddUser } from '@/app/ui/customers/dialog';
import CustomersTable from '@/app/ui/customers/table';
import { lusitana } from '@/app/ui/fonts';
import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

const Page = async ({
  searchParams,
}: {
  searchParams: {
    query?: string;
    page?: string;
    create?: string;
  };
}) => {
  const query = searchParams?.query || '';
  const create = searchParams?.create || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchCostumersPages(query);

  return (
    <>
      <div className="w-full">
        <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
          Customers
        </h1>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
          <Search placeholder="Search customers..." />
          <AddUser query={query} currentPage={currentPage} />
        </div>

        {/* table */}
        <CustomersTable query={query} currentPage={currentPage} />

        <div className="mt-5 flex w-full justify-center">
          <Pagination key={query + totalPages} totalPages={totalPages} />
        </div>
      </div>

      {create && <DialogAddUser query={query} currentPage={currentPage} />}
    </>
  );
};

export default Page;
