import Footer from '@/components/footer';
import Navbar from '../components/navbar'
import Order from '../components/order'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline'

import { getSession} from 'next-auth/react'

const cart = ({session}) => {
  // const userId = "649e7f39d7b6fe41120c53fd"
  const [products,setProducts] = useState(null)
  const [quantity,setQuantity] = useState(null)
  const [loading,setLoading] = useState(true)
  const [color,setColor] = useState("")
  const [id,setId] = useState("")
  const [total,setTotal] = useState(0)

 

  const addHandler = async () => {
  const userid = JSON.parse(localStorage.getItem('user'))._id
      const response = await fetch(`/api/cart/addProduct/${userid}`,{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({productId:id})
      })
      const data = await response.json()
      setId("")
      window.location.reload()
      // console.log(data)
  }

  const removeHandler = async () => {
  const userid = JSON.parse(localStorage.getItem('user'))._id
      const response = await fetch(`/api/cart/removeProduct/${userid}`,{
          method:'DELETE',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({productId:id})
      })
      const data = await response.json()
      console.log(data)
      setId("")
      window.location.reload()
  }

  // useEffect(()=>{   
  //     const checkColor = () =>{
  //         if(pro.color=='B') setColor('Black')
  //         if(pro.color=='W') setColor('White')
  //         if(pro.color=='G') setColor('Gray')
  //     }
  //     checkColor()
  // },[])

  // get All Orders
  useEffect(()=>{
    setLoading(true)
      const fetchOrders = async () => {
      const userid = JSON.parse(localStorage.getItem('user'))._id
      const response = await fetch(`/api/cart/getAllProducts/${userid}`)
      const data = await response.json()
      setProducts(data.ans1)
      setQuantity(data.ans2)
    }
    fetchOrders()
    setLoading(false)
  },[])

  useEffect(()=>{
    const totaling = async () =>{
      var val = 0;
      if(quantity!=null){
      for(var i=0;i<quantity.length;i++){
        val += quantity[i]*products[i].price
      }
      setTotal(val)
      console.log(quantity)
    }
    }
    totaling()
  },[quantity])
  const nthElement = (arr, n = 0) => (n > 0 ? arr.slice(n, n + 1) : arr.slice(n))[0];

  if(loading){
    return (
      <>
        <Navbar/>
            <h1 className='flex-grow' >Loading....</h1>
      </>
    )
  }
  else if(products==null){
    return(
      <>
        <Navbar/>
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
            <div className='flex-grow' >
              <h1 className='text-4xl m-5 '>Shopping Cart</h1>
              <div className='grid grid-cols-10' >
                <div className='hidden min-[1000px]:block min-[1000px]:col-start-1 min-[100px]:col-end-7  ' >
                  <hr />
                  {products && products.map((pro)=>{
                  return(
                  <>
                    <div className="grid grid-cols-5  m-5" onClick={()=>setId(pro._id)}>
                        <div className="col-start-1 col-end-3 m-5" >
                            <img  className="w-4/5 h-9/10" src={pro.image[3]} alt="1" />
                        </div>                
                        <div className="col-start-3 col-end-6" >
                            <div className="flex justify-between m-1" >
                            <h1>{pro.title}</h1>
                            <button>
                                <XMarkIcon className="block h-6 w-6"/>
                            </button>
                            </div>
                            <h1 className="text-black m-1" >{`${color}`}</h1>
                            <h1 className='m-1' >{`${pro.price} rs.`}</h1>
                            <h1 className="text-black m-1" >{`Qnt: ${nthElement(quantity, products.indexOf(pro))}`}</h1>
                            <div  >
                            <button className='m-1 text-lg bg-gray-300 px-2 rounded-lg' onClick={addHandler}>{`+`}</button>
                            <button className='m-1 text-lg bg-gray-300 px-2 rounded-lg' onClick={removeHandler}>{`-`}</button>
                            </div>
                            </div>                
                        </div>
                        <hr className="m-5"/>
                    </>
                  )
                })}
                </div>
                <div className='hidden min-[1000px]:block min-[1000px]:col-start-7 min-[1000px]:col-end-10'>
                  <div className='m-5 p-5 ' >
                    <h1 className='text-xl' >Order Summary</h1>
                    <div className='flex justify-between p-2 ' >
                      <h1 className='text-gray-400' >Subtotal</h1>
                      <h1 className='text-gray-400' >{`${total} rs.`}</h1>
                    </div>
                    <hr className='bg-red-500' />
                    <div className='flex justify-between p-2 ' >
                      <h1 className='text-gray-400' >Shipping estimate</h1>
                      <h1 className='text-gray-400' >{`${total/50} rs.`}</h1>
                    </div>
                    <hr className='bg-red-500' />
                    <div className='flex justify-between p-2 ' >
                      <h1 className='text-gray-400' >Tax estimate</h1>
                      <h1 className='text-gray-400' >{`${total*8/100} rs.`}</h1>
                    </div>
                    <hr className='bg-red-500' />
                    <div className='flex justify-between p-2 ' >
                      <h1>Order total</h1>
                      <h1>{`${total*11/10} rs.`}</h1>
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
                  <>
                    <div className="grid grid-cols-5  m-5" onClick={()=>setId(pro._id)}>
                        <div className="col-start-1 col-end-3 m-5" >
                            <img  className="w-4/5 h-9/10" src={pro.image[3]} alt="1" />
                        </div>                
                        <div className="col-start-3 col-end-6" >
                            <div className="flex justify-between m-1" >
                            <h1>{pro.title}</h1>
                            <button>
                                <XMarkIcon className="block h-6 w-6"/>
                            </button>
                            </div>
                            <h1 className="text-black m-1" >{`${color}`}</h1>
                            <h1 className='m-1' >{`${pro.price} rs.`}</h1>
                            <h1 className="text-black m-1" >{`Qnt: ${nthElement(quantity, products.indexOf(pro))}`}</h1>
                            <div  >
                            <button className='m-1 text-lg bg-gray-300 px-2 rounded-lg' onClick={addHandler}>{`+`}</button>
                            <button className='m-1 text-lg bg-gray-300 px-2 rounded-lg' onClick={removeHandler}>{`-`}</button>
                            </div>
                            </div>                
                        </div>
                        <hr className="m-5"/>
                    </>
                  )
                })} 
                </div>
                <div className='flex justify-center min-[1000px]:hidden'>
                  <div className='m-5 p-5  w-3/5 ' >
                    <h1 className='text-xl' >Order Summary</h1>
                    <div className='flex justify-between p-2 ' >
                      <h1 className='text-gray-400' >Subtotal</h1>
                        <h1 className='text-gray-400' >{`${total} rs.`}</h1>
                    </div>
                    <hr className='bg-red-500' />
                    <div className='flex justify-between p-2 ' >
                      <h1 className='text-gray-400' >Shipping estimate</h1>
                      <h1 className='text-gray-400' >{`${total/50} rs.`}</h1>
                    </div>
                    <hr className='bg-red-500' />
                    <div className='flex justify-between p-2 ' >
                      <h1 className='text-gray-400' >Tax estimate</h1>
                      <h1 className='text-gray-400' >{`${total*8/100} rs.`}</h1>
                    </div>
                    <hr className='bg-red-500' />
                    <div className='flex justify-between p-2 ' >
                      <h1>Order total</h1>
                      <h1>{`${total*11/10} rs.`}</h1>
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