import React from "react";
import Link from "next/link";
import Image from 'next/image';

type CardProps = {
  id: string;
  name: string;
  imageUrl: string;
  title: string;
};

export default async function Card({ artwork } : { artwork: CardProps }) {
    return (
        <Link href={`/artworks/${artwork.name}`} className="shadow-[#106ae0] shadow-lg hover:opacity-50 transition">
            <div className="overflow-hidden">
                <Image 
                    src={artwork.imageUrl} 
                    alt={artwork.name}
                    width={400}
                    height={300}
                    className="h-auto max-w-full object-cover my-2" 
                />
            </div>
        </Link>
    )
};