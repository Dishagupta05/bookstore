import React, { useEffect, useState } from 'react';
import axios from "axios";
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';
import { GrLanguage } from "react-icons/gr";
import { FaHeart, FaEdit } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useSelector } from 'react-redux';

const ViewBookDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:1000/api/v1/get-book-by-id/${id}`);
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };
    fetchBook();
  }, [id]);

  if (!data) {
    return (
      <div className='h-screen bg-zinc-900 flex items-center justify-center'>
        <Loader />
      </div>
    );
  }

  return (
    <div className='px-12 py-8 bg-zinc-900 flex lg:flex-row flex-col gap-8'>
      {/* Left - Image & Buttons */}
      <div className='w-full lg:w-3/6'>
        <div className='bg-zinc-800 flex flex-col lg:flex-row justify-center gap-10 py-12 rounded'>
          <img
            src={data.url}
            alt="Book cover"
            className='h-[50vh] md:h-[60vh] lg:h-[70vh] rounded'
          />

          {isLoggedIn && role === "user" && (
            <div className='flex flex-row lg:flex-col mt-4 lg:mt-0 items-center justify-between lg:justify-start'>
              <button className='bg-white rounded lg:rounded-full text-3xl p-3 text-red-500 flex items-center justify-center'>
                <FaHeart /><span className='ms-4 block lg:hidden'>Favorite</span>
              </button>
              <button className='text-white rounded lg:rounded-full text-3xl p-3 mt-0 lg:mt-8 bg-blue-500 flex items-center justify-center'>
                <IoCartSharp /><span className='ms-4 block lg:hidden'>Add to Cart</span>
              </button>
            </div>
          )}

          {isLoggedIn && role === "admin" && (
            <div className='flex flex-row lg:flex-col mt-4 lg:mt-0 items-center justify-between lg:justify-start'>
              <button className='bg-white rounded lg:rounded-full text-3xl p-3 flex items-center justify-center'>
                <FaEdit /><span className='ms-4 block lg:hidden'>Edit</span>
              </button>
              <button className='text-red-500 rounded lg:rounded-full text-3xl p-3 mt-0 lg:mt-8 bg-white flex items-center justify-center'>
                <MdDelete /><span className='ms-4 block lg:hidden'>Delete</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Right - Book Info */}
      <div className='p-4 w-full lg:w-3/6'>
        <h1 className='text-4xl text-zinc-300 font-semibold'>{data.title}</h1>
        <p className='text-zinc-400 mt-1'>by {data.author}</p>
        <p className='text-zinc-500 mt-4 text-xl'>{data.desc}</p>
        <p className='flex mt-4 items-center text-zinc-400'>
          <GrLanguage className="me-3" /> {data.language}
        </p>
        <p className='mt-4 text-zinc-100 text-3xl font-semibold'>
          Price: ₹{data.price}
        </p>
      </div>
    </div>
  );
};

export default ViewBookDetails;
