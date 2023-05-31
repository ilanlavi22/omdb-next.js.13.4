export default async function getAllMedia() {
  const res = await fetch(
    `https://www.omdbapi.com/?s=2023?&page=1&y=2023&apikey=${process.env.OMDB_API_KEY}`
  );
  if (!res.ok) return undefined;
  return res.json();
}
