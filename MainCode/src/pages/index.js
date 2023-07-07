import Navbar from '../components/navbar'
import Offers from '../components/offers'
import Footer from '../components/footer'

import { getSession} from 'next-auth/react'
import { useEffect } from 'react'

export default function Home({session}) {
  useEffect(()=>{
    const checkUser = async () => {
      console.log("raghav")
      console.log(session.user.email)
      const response = await fetch('/api/user/signup',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({email:session.user.email})
      })
      const response2 = await fetch('/api/user/login',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({email:session.user.email})
      })
      const data = await response2.json()
      // console.log(data)
      localStorage.setItem('user',JSON.stringify(data))
    }
    checkUser()
  },[])
    return (
      <>
      <div className='flex flex-col min-h-screen' > 
        <div className='flex-grow' >
        <Navbar/>
        <Offers/>
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
  return {
    props:{session}
  }
}