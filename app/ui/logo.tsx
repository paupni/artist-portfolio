import { playfairDisplay } from '@/app/ui/fonts';

export default function Logo() {
    return (
      <div className={`${playfairDisplay.className} text-3xl font-semibold text-gray-800 cursor-pointer hover:text-gray-400 transition-all duration-300`}>
        Artist Name
      </div>
    );
  }
  