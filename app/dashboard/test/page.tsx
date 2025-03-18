import AddTabletForm from '@/app/ui/invoices/test-form';
import { lusitana } from '@/app/ui/fonts';

export default async function Page() {

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Test Page
      </h1>
      <AddTabletForm />
    </main>
  );
}