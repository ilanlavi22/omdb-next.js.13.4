import getSearchMedia from '@/lib/getSearchMedia';
import Card from '@/app/components/Card';
import { Suspense } from 'react';
import Pagination from '@/app/components/pagination';

export async function generateMetadata({ params: { searchTerm } }) {
  const mediaData = getSearchMedia(searchTerm);
  const media = await mediaData;
  const displayTerm = searchTerm.replaceAll('%20', ' ');

  if (!media?.Search) {
    return {
      title: `${displayTerm} Not Found`,
    };
  }

  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`,
  };
}

export default async function SearchMedia({
  params: { searchTerm },
  searchParams,
}) {
  const pageNumber = searchParams.pageNumber || 1;
  const mediaData = getSearchMedia(searchTerm, pageNumber);
  const media = await mediaData;
  const results = media?.Search;

  const content = (
    <section className='w-full'>
      <h1 className='text-xl mb-8 font-bold'>
        Found {media?.totalResults} results for "{searchTerm}"
      </h1>
      <div className='w-full grid grid-cols-mediaList gap-8 my-auto content-center justify-center'>
        {results ? (
          results.map((media) => {
            return (
              <Suspense fallback={<p>Loading media...</p>}>
                <Card key={media.imdbID} {...media} />
              </Suspense>
            );
          })
        ) : (
          <p>{searchTerm} no results</p>
        )}
      </div>

      {media?.totalResults >= 1 && (
        <Pagination totalResults={media.totalResults} />
      )}
    </section>
  );
  return content;
}
