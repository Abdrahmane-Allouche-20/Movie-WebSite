import React,{useContext} from 'react'
import { ContextMovie } from '../context/context'
import { Link } from 'react-router-dom'
import FavImg from '../assets/favorite.png'
import { FaPlay ,FaBookmark  } from "react-icons/fa";
import './banner.css'
function Favorites() {

  const {Favorites,removeFav}=useContext(ContextMovie)


  return (
    <div  className='max-w-6xl mx-auto p-1  grid grid-cols-4 gap-2 lg:gap-4 mt-20 lg:mt-24'>
      {Favorites&&Favorites.length>0?
      Favorites.map((movie,index)=>(
        <div key={index} className='lg:col-span-1 col-span-2'>
        <div  className=' favorite bg-black'>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.original_title}
        className='mx-auto rounded-lg w-full h-48 border-orange-400'></img>
        <h2 className=' text-sm lg:text-base text-center text-white font-black my-2 truncate'> {movie.original_title}</h2>
         <div className='flex justify-between items-center mt-4'>
         <button className='h-8 w-8 lg:w-10 lg:h-10 flex justify-center items-center border-2 border-orange-400 text-orange-400 rounded-full bg-white hover:text-white hover:bg-orange-400 hover:border-white duration-300'
         ><FaPlay/></button>
          <button 
          onClick={()=>removeFav(movie)}
          className='h-8 w-8 lg:w-10 lg:h-10 flex justify-center items-center border-2 border-orange-400 text-orange-400 rounded-full bg-white hover:text-white hover:bg-orange-400 hover:border-white duration-300'
         ><FaBookmark/></button>
         </div>
        </div>
        </div>
      ))
      :
      <div className=' col-span-5 text-lg lg:text-4xl flex flex-col justify-center items-center '>
        <h1 className=' font-black my-5 text-center'>The List Is Empty Add Some Movies Please</h1>
        <Link to={"/"}><img src={FavImg} className='w-1/2 mx-auto'/></Link>
        </div>}
    </div>
  )
}

export default Favorites