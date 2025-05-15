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