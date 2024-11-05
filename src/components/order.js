
// const product = {
//     name: "Basic Tee-Shirt",
//     color:"Black",
//     size:"Large",
//     price:"$32.00"
// }

import { XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'


const order = ({data,quant}) => {   
    const [color,setColor] = useState("")
    const [id,setId] = useState("")

    const addHandler = async () => {
        console.log(id)
        const response = await fetch('/api/cart/addProduct/649e7f39d7b6fe41120c53fd',{
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
        console.log(id)
        const response = await fetch('/api/cart/removeProduct/649e7f39d7b6fe41120c53fd',{
            method:'DELETE',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({productId:id})
        })
        const data = await response.json()
        console.log(data)
        setId("")
        window.location.reload()
    }

    useEffect(()=>{   
        const checkColor = () =>{
            if(data.color=='B') setColor('Black')
            if(data.color=='W') setColor('White')
            if(data.color=='G') setColor('Gray')
        }
        checkColor()
    },[])
    return  (
        <>
            <div className="grid grid-cols-5  m-5" onClick={()=>setId(data._id)}>
                <div className="col-start-1 col-end-3 m-5" >
                    <img  className="w-4/5 h-9/10" src={data.image[3]} alt="1" />
                </div>                
                <div className="col-start-3 col-end-6" >
                    <div className="flex justify-between m-1" >
                    <h1>{data.title}</h1>
                    <button>
                        <XMarkIcon className="block h-6 w-6"/>
                    </button>
                    </div>
                    <h1 className="text-black m-1" >{`${color}`}</h1>
                    <h1 className='m-1' >{`${data.price} rs.`}</h1>
                    <h1 className="text-black m-1" >{`Qnt: ${quant}`}</h1>
                    <div  >
                    <button className='m-1 text-lg bg-gray-300 px-2 rounded-lg' onClick={addHandler}>{`+`}</button>
                    <button className='m-1 text-lg bg-gray-300 px-2 rounded-lg' onClick={removeHandler}>{`-`}</button>
                    </div>
                </div>                
            </div>
            <hr className="m-5"/>
        </>
    )
}

export default order