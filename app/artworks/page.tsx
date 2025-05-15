import Card from "../ui/card"
import { getArtworks } from "@/app/db/neon";

export default async function Artworks() {
    const artworks = await getArtworks();
    // console.log(artworks);
    
    if (!artworks || artworks.length === 0) {
        return <p className="mt-4 text-gray-400">No data available.</p>;
    }
    return (
        <main>
            {artworks.map((artwork) => (
                <div key={artwork.id}>
                    <Card 
                        artwork={{id: artwork.id, imageUrl: artwork.image_url, title: artwork.title}}
                    />
                </div>
            ))}
        </main>
    )
}