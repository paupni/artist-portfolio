import Logo from "./logo";

export default function Navbar() {
    return (
      <div className="flex justify-between">
        <Logo />
        <ul className="flex">
            <li>
                Artworks
            </li>
            <li>
                About
            </li>
            <li>
                CV
            </li>
            <li>
                Exhibitions
            </li>
            <li>
                Contact
            </li>
        </ul>
      </div>
    );
  }
  