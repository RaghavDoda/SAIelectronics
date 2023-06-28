
const product = {
    name: "Basic Tee-Shirt",
    color:"Black",
    size:"Large",
    price:"$32.00"
}

import { XMarkIcon } from '@heroicons/react/24/outline'


const order = () => {
    return (
        <>
            <div className="grid grid-cols-5  m-5">
                <div className="col-start-1 col-end-3 m-5" >
                    <img  className="w-4/5 h-9/10" src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" alt="1" />
                </div>                
                <div className="col-start-3 col-end-6" >
                    <div className="flex justify-between m-1" >
                    <h1>{product.name}</h1>
                    <button>
                        <XMarkIcon className="block h-6 w-6"/>
                    </button>
                    </div>
                    <h1 className="text-gray-300 m-1" >{`${product.color} | ${product.size}`}</h1>
                    <h1 className='m-1' >{product.price}</h1>
                    <input className=' m-1 border-solid bg-gray-300 text-gray-400 p-1' type="text" placeholder="Qnt." />
                </div>                
            </div>
            <hr className="m-5"/>
        </>
    )
}

export default order