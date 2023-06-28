import Navbar from '../components/navbar'
import Offers from '../components/offers'
import Footer from '../components/footer'
import Trending from '../components/trending'

// trending 
// categories
// profile 
// pay now

export default function Home() {
  return (
    <>
    <div className='flex flex-col min-h-screen' > 
      <div className='flex-grow' >
      <Navbar/>
      <div className='bg-gray-800 flex justify-center sm:hidden'>
        <div className='w-full max-w-[40rem] flex bg-white rounded-full mx-2 sm:mx-0 mb-2' >
          <input className=' w-full max-w-[40rem]  text-xl px-5 outline-none rounded-full' type="text" placeholder='search...' />
          <button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"  strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 p-1 rounded-r-full text-black mt-0 mb-0 mr-0 bg-gray-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          </button>
        </div>
      </div>
      <Offers/>
      <Trending/>
      <Footer/>
      </div>
      </div>
    </>
  )
}
