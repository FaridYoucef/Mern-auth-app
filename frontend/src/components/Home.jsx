import React from 'react'

const Home = () => {
  return (
    <div className=" flex justify-center items-center h-80">
      <div className='w-full max-w-screen-md p-8 bg-slate-100 rounded-lg shadow-lg'>
        <h1 className='text-2xl font-bold text-center pb-4'>MERN Authentication App</h1>

        <p className='text-center'>
          This MERN project is built using JTW, HTTP-Only cookie in the backend.
          Redux toolkit, and tailwind are used in the frontend.{" "}
        </p>

        <div className='flex justify-center pt-4 gap-3'>
          <button className='py-2 px-4 bg-[#292929] rounded-xl text-white hover:text-stone-400'>Sign in</button>
          <button className='py-2 px-4 bg-[#292929] rounded-xl text-white hover:text-stone-400'>Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default Home