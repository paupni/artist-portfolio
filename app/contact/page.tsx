import ContactForm from '@/app/ui/contact-form';

export default function ContactPage() {
  return (
    <main className='flex flex-col p-24 bg-white'>
      <ContactForm />
      <p className='py-6 text-sm font-medium text-gray-700 dark:text-gray-300'>You can also contact me via Instagram :)</p>
    </main>
  );
}