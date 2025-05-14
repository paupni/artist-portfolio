import { playfairDisplay } from '@/app/ui/fonts';
import Link from 'next/link'

export default function Logo() {
    return (
      <div className={`${playfairDisplay.className} text-3xl font-semibold text-gray-800 hover:text-gray-400 transition-all duration-300`}>
        <Link href="/">Artist Name</Link>
      </div>
    );
  }
  