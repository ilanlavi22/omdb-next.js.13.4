import Image from 'next/image';
import { FiStar, FiFilm } from 'react-icons/fi';
import coverImage from 'public/assets//cover-placeholder.png';

export default function SingleMedia({
  Title,
  Released,
  Year,
  Poster,
  Plot,
  Genre,
  imdbRating,
  Type,
  Language,
  Runtime,
  Actors,
}) {
  return (
    <section className='w-full m-auto'>
      <div className='flex flex-col items-center space-x-8 md:flex-row md:items-start'>
        <div className='max-w-[300px]'>
          <Image
            src={Poster !== 'N/A' ? Poster : coverImage}
            alt={Title}
            width={500}
            height={500}
            className='object-cover max-w-[300px] rounded-md'
          />
        </div>
        <div className='flex flex-col items-center md:items-start'>
          <h1 className='text-2xl font-bold mb-4 leading-snug mt-4 md:mt-0'>
            {Title}
          </h1>
          <h2 className='first-letter:uppercase flex space-x-2 opacity-70'>
            <span className='first-letter:uppercase'>{Type}</span>
            <span>{Year}</span>
            <span>{Runtime !== 'N/A' && Runtime} </span>
          </h2>

          <div className='flex pt-4 '>
            {Genre !== 'N/A' &&
              Genre?.split(',').map((genre) => {
                return (
                  <span
                    key={genre}
                    className='bg-orange rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
                  >
                    {genre}
                  </span>
                );
              })}
          </div>
          <p className='pt-4 max-w-2xl'>
            {!Plot === 'N/A' ? 'Plot has not been provided yet' : Plot}
          </p>

          <div className='flex space-x-4 pt-8 items-center'>
            {Actors?.split(' , ').map((actor) => {
              return (
                <span key={actor} className=' text-sm text-black'>
                  {actor}
                </span>
              );
            })}
          </div>

          <div className='flex space-x-4 pt-4 opacity-70 text-sm items-center'>
            <span>
              <span className='font-bold'>Rating: </span>
              {!imdbRating === 'N/A' ? 'No Rating' : imdbRating}
            </span>
            <span>
              <span className='font-bold'>Released: </span>
              {Released}
            </span>
            <span>
              <span className='font-bold'>Language: </span>
              {Language}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
