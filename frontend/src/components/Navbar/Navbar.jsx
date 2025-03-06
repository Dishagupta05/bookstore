import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const links = [
        {
            title:"Home",
            link:"/",
        },
        {
            title:"About Us",
            link:"/about-us",
        },
        {
            title:"All Books",
            link:"/all-books",
        },
        {
            title:"Cart",
            link:"/cart",
        },
        {
            title:"Profile",
            link:"/profile",
        },
    ];
  return (
    <div className='bg-zinc-800 text-white px-8 py-4 flex items-center justify-between'>
        <Link to="/" className='flex items-center'>
        <img className='h-10 me-4'
        src="https://cdn-icons-png.flaticon.com/128/10433/10433049.png" 
        alt='logo'></img>
            <h1 className='text-2xl font-semibold'>BookHeaven</h1>
        </Link>
        <div className='nav-links-bookheaven flex items-center gap-4'>
            <div className='flex gap-4'>
            {links.map((items,i)=>(
                <Link to={items.link}
                className='hover:text-blue-500 transition-300' key={i}>{items.title}

                </Link>))}
            </div>
            <div className='flex gap-4'>
                <Link to="/LogIn" className='px-2 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300'>login</Link>
                <Link to="/SignUp" className='px-2 py-1 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300'>Signin</Link>
                           
            </div>
        </div>
    </div>
  )
}

export default Navbar
