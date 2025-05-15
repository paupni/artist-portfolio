import Card from "../ui/card"

export default async function Artworks() {
    return (
        <main>
            <Card 
                artwork={{id: '1', imageUrl: 'https://ycep4hdyvmfuo63e.public.blob.vercel-storage.com/artworks/artwork-1-4GOJOMFJN8eqkJsv1HIaxjdUOj16sk.jpg', title: 'artwork 1'}}
            />
        </main>
    )
}