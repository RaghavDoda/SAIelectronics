import Footer from '@/components/footer';
import Navbar from '../components/navbar'
import Link from 'next/link'

import { getSession} from 'next-auth/react'

const profile = () => {
    return (
        <>
          <div className='flex flex-col h-screen' >
            <Navbar/>
            {/* <div className=' bg-gray-800 flex justify-center sm:hidden'>
              <div className='w-full max-w-[40rem] flex bg-white rounded-full mx-2 sm:mx-0 mb-2' >
                <input className=' w-full max-w-[40rem]  text-xl px-5 outline-none rounded-full' type="text" placeholder='search...' />
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none"  strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 p-1 rounded-r-full text-black mt-0 mb-0 mr-0 bg-gray-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                </button>
              </div>
            </div> */}
            <div className="flex-grow">
                <div className='flex justify-center mt-20 ' >
                    <h1 className='text-4xl text-white bg-pink-500 w-3/10 justify-center rounded-lg p-3' >Coming soon...</h1>
                </div>
            </div>
            <Footer/>
          </div>
        </>
    )
}

export default profile;

export async function getServerSideProps(context){
  const session = await getSession(context)
  if(!session){
    return {
      redirect:{
        destination:'/login',
        permanent:false
      }
    }
  }
  else if(session.user.email=='raghavdoda2@gmail.com'){
	  return {
		redirect:{
		  destination:'/admin',
		  permanent:false
		}
	  }
	}
  return {
    props:{session}
  }
}