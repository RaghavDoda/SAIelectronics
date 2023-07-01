import Footer from '@/components/footer';
import Navbar from '../components/navbar'
import Order from '../components/order'
import Link from 'next/link';
import { useEffect, useState } from 'react';

const cart = () => {
  // const userId = "649e7f39d7b6fe41120c53fd"
  const [products,setProducts] = useState(null)
  const [quantity,setQuantity] = useState(null)
  const [loading,setLoading] = useState(false)

  // get All Orders
  useEffect(()=>{
    setLoading(true)
    const fetchOrders = async () => {
      const response = await fetch('/api/cart/getAllProducts/649e7f39d7b6fe41120c53fd')
      const data = await response.json()
      setProducts(data.ans1)
      setQuantity(data.ans2)
    }
    fetchOrders()
    setLoading(false)
  },[])
  const nthElement = (arr, n = 0) => (n > 0 ? arr.slice(n, n + 1) : arr.slice(n))[0];
  // console.log(orders)

  if(loading){
    return (
      <>
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
            <h1 className='flex-grow' >Loading....</h1>
      </>
    )
  }
if(products==null){
  return(
    <>
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
            <h1 className='flex-grow' >No orders...</h1>
    </>
  )
}
else 
{
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
            <div className='flex-grow' >
              <h1 className='text-4xl m-5 '>Shopping Cart</h1>
              <div className='grid grid-cols-10' >
                <div className='hidden min-[1000px]:block min-[1000px]:col-start-1 min-[100px]:col-end-7  ' >
                  <hr />
                  {products && products.map((pro)=>{
                  return(
                      <Order data = {pro} quant = {nthElement(quantity, products.indexOf(pro))} />
                  )
                })}
                </div>
                <div className='hidden min-[1000px]:block min-[1000px]:col-start-7 min-[1000px]:col-end-10'>
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
                    <Link href={'/payNow'} >
                    <div className='flex justify-center' >
                    <button className='bg-blue-700 text-white p-1 text-xl px-5 rounded-full ' >
                      Checkout
                    </button>
                    </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className=' min-[1000px]:hidden min-[1000px]:col-start-1 min-[100px]:col-end-7  ' >
                  <hr />
                  {products && products.map((pro)=>{
                  return(
                      <Order data = {pro} quant = {nthElement(quantity, products.indexOf(pro))} />
                  )
                })} 
                </div>
                <div className='flex justify-center min-[1000px]:hidden'>
                  <div className='m-5 p-5  w-3/5 ' >
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
                    <Link href={'/payNow'}>
                    <div className='flex justify-center' >
                    <button className='bg-blue-700 text-white p-1 text-xl px-5 rounded-full ' >
                      Checkout
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
}

export default cart;