'use client';

import Link from 'next/link'
import Logo from "./logo";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useState, useEffect } from 'react';

const links = [
  { name: 'Artworks', href: '/artworks' },
  { name: 'About', href: '/about' },
  { name: 'CV', href: '/cv'},
  { name: 'Exhibitions', href: '/exhibitions'},
  { name: 'Contact', href: '/contact'},
];

export default function Navbar() {
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    setNavbar(!navbar);
  };

  useEffect(() => {
    setNavbar(false);
  }, [ pathname ]);

  return (
    <nav className="container flex justify-between flex-wrap items-baseline my-6 lg:mx-auto text-gray-700">
      <div className='w-1/2'>
        <Logo />
      </div>
      <button type="button" onClick={()=>handleClick()} 
        className=" p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100">
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
      <div className={`${
          navbar ? '' : 'hidden'
        } w-full lg:inline-flex lg:flex-grow lg:w-auto `}>
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full items-baseline items-end flex flex-col lg:h-auto'>
            {links.map((link) => {
              return (
                <Link key={link.name} href={link.href} className={clsx(
                    'lg:inline-flex lg:flex-row w-full items-baseline items-end px-3 py-2 flex flex-col hover:text-gray-400 transition-all duration-300',
                    {
                      'text-gray-400': pathname === link.href,
                    },
                  )}>
                  {link.name}
                </Link>
              )}
            )}
            <Link href="https://www.instagram.com/paula_pniewska/" className="[&>svg]:h-5 [&>svg]:w-5 px-3 py-2 pb-2.5 content-center cursor-pointer hover:text-gray-400 transition-all duration-300 lg:mx-1.5">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512">
                  <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </Link>
          </div>
      </div>
    </nav>
  );
}
  