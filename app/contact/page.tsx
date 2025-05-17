import Form from 'next/form'
import { playfairDisplay } from '@/app/ui/fonts';

export default async function Contact() {
    return (
        <Form action="/" className="space-y-8 w-md mx-auto mt-6">
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Your email</label>
                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Subject" required />  
            </div>
            <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">Your message</label>
                <textarea id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave your message..."></textarea>
            </div>
            <button className="bg-white hover:bg-gray-900 hover:text-white text-gray-700 text-xs py-3 px-6 border border-gray-500 transition-all duration-300" type="submit">SUBMIT</button>
        </Form>
    )
}