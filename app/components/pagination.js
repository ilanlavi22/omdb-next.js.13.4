'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

const Pagination = ({ totalResults, currentPage }) => {
  const router = useRouter();
  const pathName = usePathname();
  const [pageNumber, setPageNumber] = useState(1);
  let totalPages = 1;

  const getTotalPages = () => {
    if (totalResults % 10 > 0) {
      totalPages = parseInt(totalResults / 10 + 1);
      return;
    }
    totalPages = parseInt(totalResults / 10);
  };

  getTotalPages();

  const pageForwardHandler = () => {
    if (pageNumber === totalPages) return;
    setPageNumber((prevPage) => ++prevPage);
  };

  const pageBackHandler = () => {
    if (pageNumber === 1) return;
    setPageNumber((prevPage) => --prevPage);
  };

  useEffect(() => {
    setPageNumber(1);
  }, [currentPage]);

  useEffect(() => {
    if (pathName === '/') {
      router.push(`/?page=${currentPage}&pageNumber=${pageNumber}`);
    } else {
      router.push(`${pathName}/?pageNumber=${pageNumber}`);
    }
  }, [pageNumber, router, currentPage, pathName]);

  return (
    <div className='flex items-center justify-center py-12'>
      <button
        disabled={pageNumber === 1 && 'disabled'}
        onClick={pageBackHandler}
        className='flex items-center justify-center bg-orange rounded-full w-8 h-8 disabled:bg-gray-300'
      >
        <MdKeyboardArrowLeft className=' text-2xl' />
      </button>
      <p className='text-xl min-w-[30px] px-5'>{pageNumber}</p>
      <button
        disabled={pageNumber >= totalPages && 'disabled'}
        onClick={pageForwardHandler}
        className='flex items-center justify-center bg-orange rounded-full w-8 h-8 disabled:bg-gray-300'
      >
        <MdKeyboardArrowRight className=' text-2xl' />
      </button>
    </div>
  );
};

export default Pagination;
