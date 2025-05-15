import { getArtwork } from "@/app/db/neon";

export default async function ArtworkDetails({ params } : { params: Promise<{artworkId: string}> }) {

    const artworkId = (await params).artworkId;
    const artwork = await getArtwork(artworkId);
    console.log(artwork);
    

    return (
        <div>
            <h1>Title of an Artwork {artworkId}</h1>
            <p>Size: {artwork?.size}</p>
        </div>
    )
}