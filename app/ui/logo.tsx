import { playfairDisplay } from '@/app/ui/fonts';
import Link from 'next/link'

export default function Logo() {
    return (
      <div className={`${playfairDisplay.className} text-5xl font-semibold text-black hover:text-gray-400 transition-all duration-300`}>
        <Link href="/">Paula Pniewska</Link>
      </div>
    );
  }
  