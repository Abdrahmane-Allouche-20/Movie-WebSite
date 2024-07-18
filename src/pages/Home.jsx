import React, { useContext, useState } from 'react';
import { ContextMovie } from '../context/context';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import NotFound from '../assets/not found.gif'; // Ensure the path is correct
import './banner.css';
import Card from './Card';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

function Home() {
  const { movies, loading, error, search } = useContext(ContextMovie);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? movies.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === movies.length - 1 ? 0 : currentSlide + 1);
  };

  if (loading) {
    return (
      <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <ClimbingBoxLoader color='#ff861b' size={30} speedMultiplier={1} />
      </div>
    );
  }

  if (error) {
    return (
      <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2'>
        <img src='../images/Error.png' alt='Error' className='w-full h-full' />
      </div>
    );
  }

  return (
    <div>
      {search === '' ? (
        <div>
        <div className='content'>
          <BsArrowLeftCircleFill onClick={handlePrevious} className='arrow arrow-left' />
          {movies && movies.length > 0 && search === '' && (
            <>
              {movies.map((movie, index) => (
                <div
                  key={index}
                  className={
                    currentSlide === index ? 'current-image' : 'current-image hide-current-image'
                  }
                >
                  <img
                    className={
                      currentSlide === index ? 'current-image' : 'current-image hide-current-image'
                    }
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.original_title}
                  />
                  <div className='absolute box bg-black/50 rounded-2xl p-2 lg:p-4 bottom-6 lg:bottom-4 left-8 lg:left-4'>
                    <h1 className='text-sm lg:text-lg text-orange-600 font-black'>
                      Title: <span className='text-sm text-white'>{movie.original_title}</span>
                    </h1>
                    <h1 className='text-sm lg:text-lg text-orange-600 font-black'>
                      Popularity: <span className='text-xs text-white'>{movie.popularity}</span>
                    </h1>
                    <h1 className='text-sm lg:text-lg text-orange-600 font-black'>
                      Release Date: <span className='text-xs text-white'>{movie.release_date}</span>
                    </h1>
                    <h1 className='text-sm lg:text-lg text-orange-600 font-black'>
                      Vote Average: <span className='text-xs text-white'>{movie.vote_average} IMDb</span>
                    </h1>
                    <h1 className='text-sm lg:text-lg text-orange-600 font-black'>
                      Vote Count: <span className='text-xs text-white'>{movie.vote_count}</span>
                    </h1>
                    <h1 className='text-sm lg:text-lg text-orange-600 font-black'>
                      Age: <span className='text-xs text-white'>{movie.adult ? '+18 ans' : '-18 ans'}</span>
                    </h1>
                  </div>
                </div>
              ))}
              <BsArrowRightCircleFill onClick={handleNext} className='arrow arrow-right' />
              <span className='circle-indicators'>
                {movies.map((_, index) => (
                  <button
                    key={index}
                    className={
                      currentSlide === index ? 'current-indicator' : 'current-indicator inactive-indicator'
                    }
                    onClick={() => setCurrentSlide(index)}
                  ></button>
                ))}
              </span>
            </>
          )}
        </div>
        <div className='max-w-6xl mx-auto p-3   grid grid-cols-4 gap-4'>
        { movies&&movies.length>0?
        movies.map((movie,index)=>(
          <Card  key={index} movie={movie}/>
        ))
        :null}

        </div>
        </div>
      ) : (
        <div className='max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-5 gap-4 mt-24'>
          {movies && movies.length > 0 ? (
            movies.map((movie, index) => <Card key={index} movie={movie} />)
          ) : (
            <div className='flex justify-center items-start h-fit gap-24 flex-wrap col col-span-5'>
              <h1 className='text-2xl lg:text-5xl font-bold text-orange-500 text-center block w-full my-5'>
                This Movie {search} is not available
              </h1>
              <div className='flex justify-center -mt-11 lg:-mt-8 items-center'>
                <img src={NotFound} alt='Not Found' className='w-1/2 rounded-full' />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
