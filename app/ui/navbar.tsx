import Logo from "./logo";

export default function Navbar() {
    return (
      <div className="container flex justify-between items-center p-6 mx-auto text-gray-700">
        <Logo />
        <ul className="flex">
            <li className="cursor-pointer hover:text-gray-400 transition-all duration-300 mx-1.5 sm:mx-6">
                Artworks
            </li>
            <li className="cursor-pointer hover:text-gray-400 transition-all duration-300 mx-1.5 sm:mx-6">
                About
            </li>
            <li className="cursor-pointer hover:text-gray-400 transition-all duration-300 mx-1.5 sm:mx-6">
                CV
            </li>
            <li className="cursor-pointer hover:text-gray-400 transition-all duration-300 mx-1.5 sm:mx-6">
                Exhibitions
            </li>
            <li className="cursor-pointer hover:text-gray-400 transition-all duration-300 mx-1.5 sm:mx-6"    >
                Contact
            </li>
        </ul>
      </div>
    );
  }
  