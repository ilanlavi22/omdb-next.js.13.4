export default async function getMedia(mediaId) {
  const res = await fetch(
    `http://www.omdbapi.com/?i=${mediaId}&plot=full&apikey=${process.env.OMDB_API_KEY}`
  );
  if (!res.ok) throw new Error('failed to fetch data');
  return res.json();
}
