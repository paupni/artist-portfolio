import Card from "../ui/card"
import { getArtworks } from "@/app/db/neon";
import { list } from '@vercel/blob';

export default async function Artworks() {
    const artworks = await getArtworks();
    
    if (!artworks || artworks.length === 0) {
        return <p className="mt-4 text-gray-400">No data available.</p>;
    }

    // async function allImages() {
    //     const blobs = await list({
    //         prefix: 'artworks/',
    //     });
    //     return blobs;
    // }
    // const images = await allImages();
    // images.blobs.shift();

    return (
        <main className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* {images.blobs.map((image, index) => { */}
            {artworks.map((image, index) => {
                let artworkInfo = artworks[index];
                return(    
                    <div key={artworkInfo.id}>
                        <Card 
                            artwork={{id: artworkInfo.id, imageUrl: artworkInfo.image_url, title: artworkInfo.title, name: artworkInfo.name}}
                        />
                    </div>
                )
                }
            )}
        </main>
    )
}