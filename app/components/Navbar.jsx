import Image from 'next/image';
import Link from 'next/link';
import Search from '@/app/components/Search';
import logo from 'public/assets/logo.png';
export default function Navbar() {
  return (
    <header className='w-full mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row md:py-4 items-center bg-black gap-4 '>
      <Link href='/' className='flex flex-col md:flex-row gap-4 items-center'>
        <Image src={logo} alt='What to Watch' className=''></Image>
        <h1 className='text-white text-xl font-bold pb-4 md:p-0'>
          What to Watch
        </h1>
      </Link>
      <Search />
    </header>
  );
}
