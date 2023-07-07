import Footer from '@/components/footer';
import Link from 'next/link'
import { useEffect } from 'react';
import {signIn,signOut,getSession} from 'next-auth/react'

import { Disclosure, Menu } from '@headlessui/react'
import { Bars3Icon, BellIcon} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'profile', href: '/adminprofile' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

import { XMarkIcon } from '@heroicons/react/24/outline'


const profile = ({session}) => {
  const signout = async () => {
    localStorage.removeItem('user')
    await signOut()
  }

    return (
        <>
          <div className='flex flex-col h-screen' >
          <>
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-shrink-0 items-center">
                      <Link
                        href='/admin'
                        className='bg-gray text-white rounded-md px-3 py-2 text-xl font-medium hidden sm:block'
                      >
                        {'SAIelectronics'}
                      </Link>
                </div>
              <div className="flex justify-end sm:items-stretch sm:justify-start">
                      
                <div className="hidden sm:ml-6 sm:block">
                  
                  <div className="flex justify-end">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
                      <Link
                        href='/'
                        className={classNames('bg-gray text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                      >
                        {'SAIelectronics'}
                      </Link>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </>
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
  else if(session.user.email!='raghavdoda2@gmail.com'){
    return {
      redirect:{
        destination:'/',
        permanent:false
      }
    }
  }
  return {
    props:{session}
  }
}