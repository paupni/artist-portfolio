import { getArtwork } from "@/app/db/neon";
import { playfairDisplay } from '@/app/ui/fonts';
import Image from 'next/image';

export default async function ArtworkDetails({ params } : { params: Promise<{artworkId: string}> }) {

    const artworkId = (await params).artworkId;
    const artwork = await getArtwork(artworkId);

    console.log(artworkId);
    return (
        <div className="lg:flex flex-grow md:container md:mx-auto justify-center gap-16">
            <div className="mb-6">
                <img className="max-h-screen" src={artwork?.image_url}></img>
                {/* <Image 
                    src={artwork?.image_url} 
                    alt={artwork?.name}
                    width={1000}
                    height={1000}
                    className="h-auto max-w-full object-cover my-2" 
                /> */}
            </div>
            <div className="">
                <h1 className={`${playfairDisplay.className} text-2xl font-semibold text-black`}>Title of an Artwork {artworkId}</h1>
                <p className={`${playfairDisplay.className} text-lg py-2`}>Size: {artwork?.size}</p>
                <p className="pt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, quos repellendus numquam blanditiis iure maxime et in natus, expedita esse voluptate ea libero incidunt! Eius exercitationem optio tempora corporis sint.</p>
            </div>
        </div>
    )
}