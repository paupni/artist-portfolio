import { getArtwork } from "@/app/db/neon";
import { playfairDisplay } from '@/app/ui/fonts';

export default async function ArtworkDetails({ params } : { params: Promise<{artworkId: string}> }) {

    const artworkId = (await params).artworkId;
    const artwork = await getArtwork(artworkId);


    return (
        <div className="flex gap-16 max-h-90">
            <div>
                <img className="max-h-screen" src={artwork?.image_url}></img>
            </div>
            <div className="">
                <h1 className={`${playfairDisplay.className} text-2xl font-semibold text-black`}>Title of an Artwork {artworkId}</h1>
                <p className={`${playfairDisplay.className} text-lg py-2`}>Size: {artwork?.size}</p>
                <p className="pt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, quos repellendus numquam blanditiis iure maxime et in natus, expedita esse voluptate ea libero incidunt! Eius exercitationem optio tempora corporis sint.</p>
            </div>
        </div>
    )
}