import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function getArtworks() {
    try{
        const artworks = await sql`
            SELECT
                artworks.id,
                artworks.title,
                artworks.image_url,
                artworks.size
            FROM artworks
        `
        return artworks;
    }
    catch (error) {
        console.error('Database Error:', error);
  }

}

export async function getArtwork(artworkId : string) {
    try{
        const artwork = await sql`
            SELECT
                artworks.id,
                artworks.title,
                artworks.image_url,
                artworks.size
            FROM artworks
            WHERE artworks.id = ${artworkId}
        `

        return artwork[0];
    }
    catch (error) {
        console.error('Database Error:', error);
  }

}
