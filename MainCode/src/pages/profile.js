import Footer from '@/components/footer';
import Navbar from '../components/navbar'
import Link from 'next/link'

const profile = () => {
    return (
        <>
          <div className='flex flex-col h-screen' >
            <Navbar/>
            <div className=' bg-gray-800 flex justify-center sm:hidden'>
              <div className='w-full max-w-[40rem] flex bg-white rounded-full mx-2 sm:mx-0 mb-2' >
                <input className=' w-full max-w-[40rem]  text-xl px-5 outline-none rounded-full' type="text" placeholder='search...' />
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none"  strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 p-1 rounded-r-full text-black mt-0 mb-0 mr-0 bg-gray-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                </button>
              </div>
            </div>
            <div className="flex-grow">
              <Link href='/api/auth/signin' >
                <button className='bg-blue-500 p-1 text-lg rounded-xl m-5 text-white' >Sign in</button>
              </Link>
              <Link href='/api/auth/signout' >
                <button className='bg-blue-500 p-1 text-lg rounded-xl m-5 text-white' >Sign out</button>
              </Link>
            </div>
            <Footer/>
          </div>
        </>
    )
}

export default profile;