import Image from "next/image";
import Navbar from "./ui/navbar";

export default function Home() {
  return (
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        Home content
        <img src='https://ycep4hdyvmfuo63e.public.blob.vercel-storage.com/artworks/artwork-1-4GOJOMFJN8eqkJsv1HIaxjdUOj16sk.jpg' alt='' ></img>
      </main>
  );
}
