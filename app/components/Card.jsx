import Image from 'next/image';
import Link from 'next/link';
import coverImage from 'public/assets//cover-placeholder.png';

export default function Card({ imdbID, Title, Poster, Type, Year }) {
  return (
    <Link
      href={`media/${imdbID}`}
      className='flex flex-col p-4 gap-2 w-full md:max-w-[280px] bg-white shadow-md rounded-sm'
    >
      <Image
        src={Poster !== 'N/A' ? Poster : coverImage}
        alt={Title}
        width={300}
        height={450}
        className=' object-cover w-full max-h-[280px] aspect-[1/1] object-top'
      />
      <div className='pb-2 flex gap-3 first-letter:capitalize font-bold'>
        <span className='bg-[#f5c518] px-2 py-1 rounded-sm text-xs first-letter:capitalize'>
          {Type}
        </span>
        <span className='bg-[#f5c518] px-2 py-1 rounded-sm text-xs first-letter:capitalize'>
          {Year}
        </span>
      </div>
      <p className='text-sm font-bold'>{Title}</p>
    </Link>
  );
}
