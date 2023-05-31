'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

export default function Search() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearch('');
    router.push(`search/${search}/`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='w-full max-w-[500px] pl-[5%] relative flex items-center content-center'
    >
      <input
        type='text'
        name='search'
        value={search}
        placeholder='Search ...'
        onChange={(e) => setSearch(e.target.value)}
        className='rounded-[5px] p-2 border-0 outline-none appearance-none w-full placeholder:text-slate-400'
      />
      <button type='submit' className='absolute top-[0.65rem] right-[0.35rem]'>
        <FiSearch className=' text-base min-w-[2rem]' />
      </button>
    </form>
  );
}
