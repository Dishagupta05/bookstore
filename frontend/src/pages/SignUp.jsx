import React from 'react';
import {Link} from "react-router-dom";

const SignUp = () => {
  return (
    <div className='h-auto bg-zinc-900 px-12 py-8 flex items-center justify-center'>
    <div className='bg-zinc-800 rounded-1g px-8 py-5 w-full md:w-3/6 lg:w-2/6'>
    <p className='text-zinc-200 text-xl'>Sign Up</p>
    <div className='mt-4'>
      <div>
        <label htmlFor='' className='text-zinc-400'>Username</label>
        <input type='text'
        className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none '
        placeholder='username'
        required/>
        </div>
        <div className='mt-4'>
          <label htmlFor='' className='text-zinc-400'>
            Email
          </label>
          <input 
            type='text'
            className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
            placeholder='xyz@example.com'
            name='email'
            required
          />
        </div>
        <div className='mt-4'>
          <label htmlFor='' className="text-zinc-400">
            Password
          </label>
          <input 
            type='password'
            className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
            placeholder='password'
            name='password'
            required
          />
        </div>
        <div className='mt-4'>
          <label htmlFor='' className="text-zinc-400">
            Address
          </label>
          <input 
            type='text-area'
            className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
            placeholder='address'
            name='address'
            required
          />
        </div>
        <div className='mt-4'>
          <button className="w-full bg-blue-500 text-white font-semobold py-2 rounded hover:text-blue-600">
            SignUp
          </button>
        </div>
        <p className='flex mt-4 items-center justify-center text-zinc-200 font-semobold'>
          Or
        </p>
        <p className='flex mt-4 items-center justify-center text-zinc-500 font-semibold'>
          Already have an account? &nbsp;
          <Link to="/login" className='hover:text-blue-500'>
            <u>LogIn</u>
          </Link>
        </p>

    </div>
    </div>
    </div>
    
  )
}

export default SignUp
