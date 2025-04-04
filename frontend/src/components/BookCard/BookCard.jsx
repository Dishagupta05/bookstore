import React from 'react';
import { Link } from "react-router-dom";
import { LiaRupeeSignSolid } from "react-icons/lia";


const BookCard = ({data}) => {
  
  return (
    <>
      <Link to={`/view-book-details/${data._id}`}>
        <div className='bg-zinc-800 rounded p-4 flex flex-col'>
        <div className='bg:zinc-900 rounded flex items-center justify-center'>
        <img src={data.url} alt='/' className='h-[20vh]'/>
        <div>
          <h2 className='mt-4 text-xl text-white font-semibold'>{data.title}</h2>
          <p className='mt-2 text-zinc-400 font-semibold'>by {data.author}</p>
          <p className='mt-2 text-zinc-400 font-semibold'> <LiaRupeeSignSolid /> {data.price}
</p>
        </div>
        </div>
        </div>
      </Link>
    </>
  );
};

export default BookCard
