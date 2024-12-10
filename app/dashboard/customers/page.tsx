import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Customers',
};
export default async function Page() {

  return <main>
    <p>
      This is the dashboard page. You can add more content here.
    </p>
  </main>;
}