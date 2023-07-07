import { useEffect, useState } from 'react'
import Footer from "@/components/footer"

import { Disclosure, Menu } from '@headlessui/react'
import { Bars3Icon, BellIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'

const navigation = [
	{ name: 'Add', href: '/adminAddProducts' },
  { name: 'profile', href: '/adminprofile' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

import { XMarkIcon } from '@heroicons/react/24/outline'

import {signIn,signOut,getSession} from 'next-auth/react'


export default function produccts() {
	const [isLoading,setIsLoading] = useState(false)
	const [products,setProducts] = useState([])
	const [search,setSearch] = useState("")
	const [searched,setSearched] = useState([])

		useEffect(()=>{	
			let prod = []
			for(let i = 0; i<products.length; i++) {
			if((products[i].title).toLowerCase().includes(search.toLowerCase())) {
				prod.push(products[i])
			}
			else if((products[i].company).toLowerCase().includes(search.toLowerCase())) {
				prod.push(products[i])
			}
		}
		if(search!="") setSearched(prod)
		else setSearched(products)
		},[search])


	useEffect( ()=>{
		setIsLoading(true)
		const fetchProducts = async () => {
		const response = await fetch('/api/products/getAllProducts')
		const data = await response.json()
		setSearched(data)
		setProducts(data)
		}
		fetchProducts()
		  setIsLoading(false)
		},[])
	if(isLoading) {
		return (
			<>
				<h1> Loading..... </h1>
			</>
		)
	}

	return (
		<>
		<div className='flex flex-col h-screen' >
		<div className='flex-grow' >
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
                <div className='w-full max-w-[40rem] flex bg-white rounded-full' >
                  <input className='hidden sm:block w-full max-w-[40rem]  text-xl px-5 outline-none rounded-full' onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='search...' />
                  <button>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none"  strokeWidth={1.5} stroke="currentColor" className="hidden sm:block w-8 h-8 p-1 rounded-r-full text-black mt-0 mb-0 mr-0 bg-gray-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                  </button>
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
		<div className='bg-gray-800 flex justify-center sm:hidden'>
			<div className='w-full max-w-[40rem] flex bg-white rounded-full mx-2 sm:mx-0 mb-2' >
				<input className=' w-full max-w-[40rem]  text-xl px-5 outline-none rounded-full' onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='search...' />
				<button>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none"  strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 p-1 rounded-r-full text-black mt-0 mb-0 mr-0 bg-gray-300">
				<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
				</svg>
				</button>
			</div>
		</div>
			<div className="bg-white">
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6  lg:max-w-7xl lg:px-8">
				<h2 className="sr-only">Products</h2>

				<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
				{searched.map((product) => (
					<a key={product._id} href={`/product/${product._id}`} className="group">
					<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
						<img
						src={product.image[3]}
						className="h-full w-full object-cover object-center group-hover:opacity-75"
						/>
					</div>
					<h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
					<h3 className="mt-4 text-sm text-gray-700">{product.company}</h3>
					<p className="mt-1 text-lg font-medium text-gray-900">{`${product.price} rs.`}</p>
					</a>
				))}
				</div>
			</div>
			</div>
		</div>
		<Footer/>
		</div>
		</>
	)
}

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