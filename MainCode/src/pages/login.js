import { useState ,useEffect } from "react"
import Link from "next/link"

import {signIn,signOut,getSession} from 'next-auth/react'

export default function Example() {
    // const [email,setEmail] = useState(null)
    // const [password,setPassword] = useState(null)

    // const clickhandler = async (e) => {
    //   console.log(email)
    //   console.log(password)
    //   const response = await fetch('api/user/login',{
    //     method:'POST',
    //     headers:{'Content-Type':'application/json'},
    //     body:JSON.stringify({email:email,password:password}),
    //   })
    //   const data = await response.json()
    //   console.log(data)
    //   localStorage.setItem('user',JSON.stringify(data));
    // }

    const signin = async () => {
      await signIn({callbackUrl:"/"})
    }

    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Log in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6"  >
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={(e)=>{setEmail(e.target.value)}}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e)=>{setPassword(e.target.value)}}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="m-2 flex justify-end ">
                <button className='text-sm hover:text-purple-500 hover:underline' onClick={googlesignin}>sigin with google</button>
              </div>

              <div className="m-2 flex justify-end ">
                <button className='text-sm hover:text-purple-500 hover:underline' onClick={githubsignin}>sigin with github</button>
              </div>
   */}
              <div>
                <button
                  type="submit"
                  onClick={signin}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Log in
                </button>
              </div>
              {/* <div>
                <Link href={'/signup'}
                  className="flex w-full justify-center mt-2 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </Link>
              </div> */}
            {/* </form> */}
  
            
          </div>
        </div>
      </>
    )
  }

  export async function getServerSideProps(context){
    const session = await getSession(context)
    if(session){
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