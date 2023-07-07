import Footer from '@/components/footer';
import Navbar from '../components/navbar'
import Link from 'next/link'
import { useEffect } from 'react';
import {signIn,signOut,getSession} from 'next-auth/react'


const profile = ({session}) => {
  const signout = async () => {
    localStorage.removeItem('user')
    await signOut()
  }

    return (
        <>
          <div className='flex flex-col h-screen' >
            <Navbar/>
            <div className="flex-grow">
              <div className='flex justify-center' >
                <div className='mt-10' >
                  <div className='flex justify-center'>
                <img className='w-3/5 h-3/5 rounded-full ' src={session.user.image} alt={session.user.image} />
                </div>
                <h1 className=' text-lg sm:text-2xl' ><span className='font-bold'>Name:</span> {session.user.name}</h1>
                <h1 className='text-lg sm:text-2xl'><span className='font-bold'>Email:</span> {session.user.email}</h1>
                <div className='flex justify-center' > 
                <button className='bg-blue-500 p-1 px-4 text-lg rounded-xl m-5 text-white' onClick={signout} >Log out</button>
                </div>
                </div>
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