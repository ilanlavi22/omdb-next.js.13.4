import getMedia from '@/lib/getMedia';
import { Suspense } from 'react';
import SingleMedia from './components/SingleMedia';

export async function generateMetadata({ params: { mediaId } }) {
  const mediaData = getMedia(mediaId);
  const media = await mediaData;
  const displayTerm = media?.Title?.replaceAll('%20', ' ');

  return {
    title: displayTerm,
  };
}

export default async function SinglePage({ params: { mediaId } }) {
  const mediaData = getMedia(mediaId);
  const media = await mediaData;
  return (
    <>
      <Suspense fallback={<p>Loading media...</p>}>
        <SingleMedia {...media} />
      </Suspense>
    </>
  );
}
