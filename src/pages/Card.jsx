import React, { useContext, useState } from 'react';
import './banner.css';
import { IoMdCloseCircle } from "react-icons/io";
import { FaPlay, FaBookmark, FaRegBookmark } from "react-icons/fa";
import { ContextMovie } from '../context/context';
import Succuss from './Succuss';
function Card({ movie }) {

  const { Favorites, handleFavorites,showFavorite } = useContext(ContextMovie);
  const [showDetails,setShowDetails]=useState(false)

  const isFavorite = Favorites.some(fav => fav.id === movie.id);

  function handleShowDetails() {
    setShowDetails(true);
  }

  function handleCloseDetails() {
    setShowDetails(false);
  }

  return (
    <div className=' col-span-2 lg:col-span-1'>
    <div className='card'>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.original_title}
        className='mx-auto rounded-lg w-full h-48'
      />
      <h1 className='text-black Lg:w-48 truncate my-2 lg:text-base text-xs font-black'>Title: {movie.original_title}</h1>
      <h1 className='text-black lg:text-base truncate text-xs font-black'>Rating: {movie.vote_average} IMDb</h1>
      <div className='flex justify-center items-center mt-3'>
        <button
          onClick={handleShowDetails}
          className='font-black text-xs lg:text-lg bg-white border-2 border-orange-600 px-3 lg:px-6 py-2 rounded-xl'
        >
          Show details
        </button>
      </div>
      {showDetails && (
        
        <div className='z-20 bg-black/90 w-full h-screen fixed top-0 left-0 flex justify-center items-center'>
          <div className=' mx-auto w-11/12 lg:w-1/2 bg-orange-400 border-2 lg:border-4 border-white outline outline-2 lg:outline-4 outline-orange-500 p-2 lg:p-4 rounded-xl'>
          <div className=' relative flex gap-2 lg:gap-5'>
            <button
              onClick={handleCloseDetails}
              className='absolute top-1 lg:top-1 right-1 hover:text-white duration-300 shadow-lg shadow-white rounded-full '
            >
              <IoMdCloseCircle className='text-xl lg:text-3xl' />
            </button>

            <div className='mt-5 lg:mt-3'>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
                className='rounded-lg w-full'
              />
            </div>
            <div className='mt-5 lg:mt-3 flex-1'>
              <h2 className='text-base lg:text-2xl text-black font-black mb-2'>Title: <span className='text-white'>{movie.original_title}</span></h2>
              <p className='text-xs lg:text-base lg:block hidden text-black font-black'>Description: <span className='text-white'>{movie.overview}</span></p>
              <div className=' justify-between items-center mt-4 lg:flex hidden'>
                <button 
                className='px-0.5 lg:px-3 py-2 bg-white text-black rounded-xl border-2 lg:border-4 border-orange-500  outline outline-2 lg:outline-4 outline-white text-xs lg:text-base font-black flex items-center justify-center gap-0.5 lg:gap-2 hover:text-white hover:outline-orange-600 hover:border-white hover:bg-orange-400 duration-300'
                ><FaPlay /> Watch The Movie</button>
                <button 
                  onClick={() => handleFavorites(movie)}
                  className={`${isFavorite ? "px-0.5 lg:px-1 gap-1" : 'px-1.5 lg:px-3 gap-3'} hover:bg-orange-300 duration-300 py-2 bg-white text-black rounded-xl border-2 lg:border-4 border-orange-500  outline outline-2 lg:outline-4 outline-white text-base font-black flex items-center justify-center hover:text-white hover:outline-orange-600 hover:border-white`}
                >
                  {isFavorite ? <FaBookmark /> : <FaRegBookmark />} {isFavorite ? 'Remove From Favorites' : 'Add To Favorites'}
                </button>
              </div>
            </div>
            
          </div>
          <p className='text-sm mt-2 lg:text-base  h-1/2 lg:hidden block text-black font-black'>Description: <span className='text-white'>{movie.overview}</span></p>

          <div className='flex justify-between items-center mt-4 gap-4 lg:hidden'>
                <button 
                className='px-1.5 lg:px-3 py-2 bg-white text-black rounded-xl border-2 lg:border-4 border-orange-500  outline outline-2 lg:outline-4 outline-white text-xs lg:text-base font-black flex items-center justify-center gap-0.5 lg:gap-2 hover:text-white hover:outline-orange-600 hover:border-white hover:bg-orange-400 duration-300'
                ><FaPlay /> Watch The Movie</button>
                <button 
                  onClick={() => handleFavorites(movie)}
                  className={`${isFavorite ? "px-1.5 lg:px-1 " : 'px-1.5 lg:px-3 '}gap-1 hover:bg-orange-300 duration-300 py-2 bg-white text-black rounded-xl border-2 lg:border-4 border-orange-500  outline outline-2 lg:outline-4 outline-white text-xs lg:text-base font-black flex items-center justify-center hover:text-white hover:outline-orange-600 hover:border-white`}
                >
                  {isFavorite ? <FaBookmark /> : <FaRegBookmark />} {isFavorite ? 'Remove From Favorites' : 'Add To Favorites'}
                </button>
              </div>
        </div>
        <div>

   {showFavorite ?<Succuss/>:null}    
 </div>
        </div>
        
       
      )}
    </div>
    </div>
  );
}

export default Card;
