export default async function getSearchMedia(searchTerm, pageNumber) {
  const res = await fetch(
    `http://www.omdbapi.com/?s=${searchTerm}&page=${pageNumber}&apikey=${process.env.OMDB_API_KEY}`
  );
  if (!res.ok) throw new Error('failed to fetch data');
  return res.json();
}
