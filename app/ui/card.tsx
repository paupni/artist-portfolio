import React from "react";
import Link from "next/link";

type CardProps = {
  id: string;
  imageUrl: string;
  title: string;
};

export default async function Card({ artwork } : { artwork: CardProps }) {
    return (
        <Link href={`/artworks/${artwork.id}`} className="block m-4 shadow-lg hover:opacity-50 transition">
            <div className="overflow-hidden">
                <img src={artwork.imageUrl} alt={artwork.title} className="w-full h-48 object-cover" />
            </div>
        </Link>
    )
};