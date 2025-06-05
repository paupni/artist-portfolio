import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function getArtworks() {
    try{
        const artworks = await sql`
            SELECT
                artworks.id,
                artworks.title,
                artworks.image_url,
                artworks.size,
                artworks.name
            FROM artworks
        `
        return artworks;
    }
    catch (error) {
        console.error('Database Error:', error);
  }

}

export async function getArtwork(artworkName : string) {
    try{
        const artwork = await sql`
            SELECT
                artworks.id,
                artworks.title,
                artworks.image_url,
                artworks.size,
                artworks.name
            FROM artworks
            WHERE artworks.name = ${artworkName}
        `

        return artwork[0];
    }
    catch (error) {
        console.error('Database Error:', error);
  }

}
