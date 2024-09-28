import React from 'react'

export default function LoginPage() {
  return (
    <div className='bg-gray-200 min-h-screen min-w-full flex flex-col items-center justify-center'>
      <div className='bg-blue-50 p-4 rounded-xl drop-shadow-xl min-w-[400px]'>
        <h1 className='text-2xl font-bold text-gray-800 mb-7 text-center'>Login</h1>
        <div className='flex flex-col gap-3'>
            <div className='flex flex-col gap-1'>
                <label className='font-semibold text-gray-800' htmlFor="username">Username</label>
                <input className='py-1 px-3 bg-transparent border-b-2 border-black rounded focus:outline-none'
                 type="text" name="username" id="username" />
            </div>
            <div className='flex flex-col gap-1'>
                <label className='font-semibold text-gray-800' htmlFor="password">Password</label>
                <input className='py-1 px-3 bg-transparent border-b-2 border-black rounded focus:outline-none'
                 type="text" name="password" id="password" />
            </div>
            <div className='flex justify-center mt-4' >
                <button className='bg-blue-500 px-4 py-1 rounded-2xl min-w-[100px] hover:shadow-lg' 
                ><p className='text-xl text-white font-semibold  hover:scale-105 skew-y-3'>Login</p></button>
            </div>
            <div className='flex justify-end text-red-700'>
                <p><a href="">Forgot password?</a></p>
            </div>
            <div className='flex justify-center text-blue-600 font-semibold'>
                <p><a href="">Carete new account!</a></p>
            </div>
        </div>
      </div>
    </div>
  )
}
