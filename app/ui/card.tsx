import React from "react";
import Link from "next/link";

type CardProps = {
  id: string;
  name: string;
  imageUrl: string;
  title: string;
};

export default async function Card({ artwork } : { artwork: CardProps }) {
    return (
        <Link href={`/artworks/${artwork.name}`} className="block shadow-lg hover:opacity-50 transition mb-6">
            <div className="overflow-hidden">
                <img src={artwork.imageUrl} alt={artwork.name} className="h-auto max-w-full object-cover" />
            </div>
        </Link>
    )
};