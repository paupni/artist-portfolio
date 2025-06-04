import ContactForm from '@/app/ui/contact-form';

export default function ContactPage() {
  return (
    <main className='md:flex flex-col mt-6'>
      <ContactForm />
      <p className='py-6 text-sm font-medium text-gray-700'>You can also contact me via Instagram :)</p>
    </main>
  );
}