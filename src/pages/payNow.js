import Footer from '@/components/footer';
import Navbar from '../components/navbar'
import Link from 'next/link';

import { getSession} from 'next-auth/react'

const payNow = () => {
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
            <div className='grid grid-cols-10' >
              <div className='hidden min-[1000px]:block col-start-1 col-end-8' >
              <form className='mt-16 ml-8 ' >
                <div className="space-y-12">
                  <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold text-lg leading-7 text-gray-900">1. Address Information</h2>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                          First name
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                          Last name
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-4">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                          Email address
                        </label>
                        <div className="mt-2">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                          Country
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="country"
                            id="country"
                            autoComplete="family-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="col-span-full">
                        <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                          Street address
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="street-address"
                            id="street-address"
                            autoComplete="street-address"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2 sm:col-start-1">
                        <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                          City
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="city"
                            id="city"
                            autoComplete="address-level2"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                          State / Province
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="region"
                            id="region"
                            autoComplete="address-level1"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                          ZIP / Postal code
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="postal-code"
                            id="postal-code"
                            autoComplete="postal-code"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-10 space-y-10">
                      <fieldset>
                        <legend className="text-lg font-semibold leading-6 text-gray-900">2. Select Payment Method</legend>
                        <div className="mt-6 space-y-6">
                          <div className="flex items-center gap-x-3">
                            <input
                              id="push-everything"
                              name="push-notifications"
                              type="radio"
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <div>
                            <label htmlFor="push-everything" className=" my-1 block text-md font-medium leading-6 text-gray-900">
                              Credit Card
                            </label>
                            <div className='flex my-1 ' >
                            <img className='w-8 h-6 mx-1 ' src="./1.jpeg" alt="1" />
                            <img className='w-8 h-6 mx-1' src="./2.png" alt="2" />
                            <img className='w-8 h-6 mx-1' src="./3.png" alt="3" />
                            </div>
                            <p className='text-xs my-1 hover:underline hover:text-purple-500 ' ><Link href={'/payNow'} >{`Enter Card details >`}</Link></p>
                            </div>
                          </div>
                          <div className="flex items-center gap-x-3">
                            <input
                              id="push-email"
                              name="push-notifications"
                              type="radio"
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <div>
                            <label htmlFor="push-email" className="block text-md font-medium leading-6 text-gray-900">
                              Other UPI Apps
                            </label>
                              <p className='text-xs' >Please Enter your UPI ID</p>
                              <div className='flex' >
                                <input
                                  type="text"
                                  name="upi-id"
                                  placeholder='eg:mobileno@upiapp'
                                  className="block w-full rounded-md border-0 py-1.5 px-1 m-3 ms-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <button className='bg-blue-500 px-3 text-white rounded-lg text-sm py-0 m-3' >Verify</button>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-x-3">
                            <input
                              id="push-nothing"
                              name="push-notifications"
                              type="radio"
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                              Cash on Delivery
                            </label>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </form>
              </div>
              <div className='hidden min-[1000px]:block col-start-8 col-end-11' >
                  <div className='m-5 p-5 ' >
                    <h1 className='text-xl' >Order Summary</h1>
                    <div className='flex justify-between p-2 ' >
                      <h1 className='text-gray-400' >Subtotal</h1>
                      <h1 className='text-gray-400' >$99.00</h1>
                    </div>
                    <hr className='bg-red-500' />
                    <div className='flex justify-between p-2 ' >
                      <h1 className='text-gray-400' >Shipping estimate</h1>
                      <h1 className='text-gray-400' >$5.00</h1>
                    </div>
                    <hr className='bg-red-500' />
                    <div className='flex justify-between p-2 ' >
                      <h1 className='text-gray-400' >Tax estimate</h1>
                      <h1 className='text-gray-400' >$8.32</h1>
                    </div>
                    <hr className='bg-red-500' />
                    <div className='flex justify-between p-2 ' >
                      <h1>Order total</h1>
                      <h1>$112.32</h1>
                    </div>
                    <Link href={'/payment'} >
                    <div className='flex justify-center' >
                    <button className='bg-blue-500 text-white p-1 text-xl px-5 rounded-full ' >
                      Proceed to pay
                    </button>
                    </div>
                    </Link>
                  </div>
              </div>
              <div className='min-[1000px]:hidden col-start-1 col-end-11 mx-3 ' >
              <form className='mt-16 ml-8 ' >
                <div className="space-y-12">
                  <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold text-lg leading-7 text-gray-900">1. Address Information</h2>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                          First name
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                          Last name
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-4">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                          Email address
                        </label>
                        <div className="mt-2">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                          Country
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="country"
                            id="country"
                            autoComplete="family-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="col-span-full">
                        <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                          Street address
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="street-address"
                            id="street-address"
                            autoComplete="street-address"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2 sm:col-start-1">
                        <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                          City
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="city"
                            id="city"
                            autoComplete="address-level2"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                          State / Province
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="region"
                            id="region"
                            autoComplete="address-level1"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                          ZIP / Postal code
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="postal-code"
                            id="postal-code"
                            autoComplete="postal-code"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-10 space-y-10">
                      <fieldset>
                        <legend className="text-lg font-semibold leading-6 text-gray-900">2. Select Payment Method</legend>
                        <div className="mt-6 space-y-6">
                          <div className="flex items-center gap-x-3">
                            <input
                              id="push-everything"
                              name="push-notifications"
                              type="radio"
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <div>
                            <label htmlFor="push-everything" className=" my-1 block text-md font-medium leading-6 text-gray-900">
                              Credit Card
                            </label>
                            <div className='flex my-1 ' >
                            <img className='w-8 h-6 mx-1 ' src="./1.jpeg" alt="1" />
                            <img className='w-8 h-6 mx-1' src="./2.png" alt="2" />
                            <img className='w-8 h-6 mx-1' src="./3.png" alt="3" />
                            </div>
                            <p className='text-xs my-1 hover:underline hover:text-purple-500 ' ><Link href={'/payNow'} >{`Enter Card details >`}</Link></p>
                            </div>
                          </div>
                          <div className="flex items-center gap-x-3">
                            <input
                              id="push-email"
                              name="push-notifications"
                              type="radio"
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <div>
                            <label htmlFor="push-email" className="block text-md font-medium leading-6 text-gray-900">
                              Other UPI Apps
                            </label>
                              <p className='text-xs' >Please Enter your UPI ID</p>
                              <div className='flex' >
                                <input
                                  type="text"
                                  name="upi-id"
                                  placeholder='eg:mobileno@upiapp'
                                  className="block w-full rounded-md border-0 py-1.5 px-1 m-3 ms-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <button className='bg-blue-500 px-3 text-white rounded-lg text-sm py-0 m-3' >Verify</button>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-x-3">
                            <input
                              id="push-nothing"
                              name="push-notifications"
                              type="radio"
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                              Cash on Delivery
                            </label>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </form>
              </div>
              <div className='min-[1000px]:hidden col-start-1 col-end-11'>
              <div className='m-5 p-5 ' >
                    <h1 className='text-xl' >Order Summary</h1>
                    <div className='flex justify-between p-2 ' >
                      <h1 className='text-gray-400' >Subtotal</h1>
                      <h1 className='text-gray-400' >$99.00</h1>
                    </div>
                    <hr className='bg-red-500' />
                    <div className='flex justify-between p-2 ' >
                      <h1 className='text-gray-400' >Shipping estimate</h1>
                      <h1 className='text-gray-400' >$5.00</h1>
                    </div>
                    <hr className='bg-red-500' />
                    <div className='flex justify-between p-2 ' >
                      <h1 className='text-gray-400' >Tax estimate</h1>
                      <h1 className='text-gray-400' >$8.32</h1>
                    </div>
                    <hr className='bg-red-500' />
                    <div className='flex justify-between p-2 ' >
                      <h1>Order total</h1>
                      <h1>$112.32</h1>
                    </div>
                    <Link href={'/payment'} >
                    <div className='flex justify-center' >
                    <button className='bg-blue-500 text-white p-1 text-xl px-5 rounded-full ' >
                      Proceed to Pay
                    </button>
                    </div>
                    </Link>
                  </div>
              </div>
            </div>
            <Footer/>
          </div>
        </>
    )
}

export default payNow;

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