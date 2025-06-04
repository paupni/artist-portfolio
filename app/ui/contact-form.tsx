'use client';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';

export type FormData = {
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }
    return (
        <form className="md:w-100 mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor='email' className="block mb-2 text-sm font-medium text-gray-700">Your email</label>
                <input type="email" id="email" className="shadow-sm bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@gmail.com" {...register('email', { required: true })} />
            </div>
            <div>
                <label htmlFor='subject' className="block mb-2 text-sm font-medium text-gray-700">Subject</label>
                <input type="text" id="subject" className="shadow-sm bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="Subject" {...register('subject', { required: true })} />  
            </div>
            <div className="sm:col-span-2">
                <label htmlFor='message' className="block mb-2 text-sm font-medium text-gray-700">Your message</label>
                <textarea id="message" className="mb-6 block h-26 p-2.5 w-full text-sm text-gray-900 bg-gray-50 shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave your message..." {...register('message', { required: true })}></textarea>
            </div>
            <button className="bg-white hover:bg-gray-900 hover:text-white text-gray-700 text-xs py-3 px-6 border border-gray-500 transition-all duration-300" type="submit">SUBMIT</button>
        </form>
    )
}