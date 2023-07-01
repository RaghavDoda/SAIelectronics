import { useEffect, useState } from 'react'
import Navbar from '../components/adminnavbar'
import Footer from "@/components/footer"


export default function produccts() {
	const [isLoading,setIsLoading] = useState(false)
	const [products,setProducts] = useState([])

	useEffect( ()=>{
		setIsLoading(true)
		const fetchProducts = async () => {
		const response = await fetch('/api/products/getAllProducts')
		const data = await response.json()
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
			<div className="bg-white">
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6  lg:max-w-7xl lg:px-8">
				<h2 className="sr-only">Products</h2>

				<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
				{products.map((product) => (
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