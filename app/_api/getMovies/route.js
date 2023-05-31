export async function GET(request) {
  const res = await fetch(
    `http://www.omdbapi.com/?s=Batman?&page=54&apikey=1b3abacd`
  ); // SSG
  const data = await res.json();

  return new Response(JSON.stringify(data));
}
