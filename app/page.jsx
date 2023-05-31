import getAllMedia from '@/lib/getAllMedia';
import Card from './components/Card';

export default async function HomePage() {
  const mediaData = getAllMedia();
  const media = await mediaData;
  const results = media.Search;

  const content = (
    <section className='w-full m-auto'>
      <h1 className='text-2xl font-bold mb-16 border-l-8 border-orange pl-2 leading-snug'>
        OMDb Films 2023{' '}
        <span className='block text-sm uppercase tracking-wide opacity-70'>
          The Open Movie Database
        </span>
      </h1>
      <div className='w-full grid grid-cols-mediaList gap-8 my-auto content-center justify-center'>
        {results.map((media) => {
          return <Card key={media.imdbID} {...media}></Card>;
        })}
      </div>
    </section>
  );
  return content;
}
