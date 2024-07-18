import React ,{ createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ContextMovie = createContext();

function GlobalState({ children }) {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [Favorites,setFavorites]=useState([])
  const [showFavorite,setShowFavorite]=useState(false)
  const ApiKey = "a356bac23f766d5d62221d93c9ee2139";
 const navigate=useNavigate()
  async function fetchMovie() {
    
    setLoading(true);
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}`);
      const data = await response.json();

      if (data.results) {
        setMovies(data.results);
        navigate('/')
      }
    } catch (e) {
      console.error("Error fetching popular movies:", e);
      setError(true);
    } finally {
      setLoading(false);
    }
  }
  function handleFavorites(movie){
  
    setFavorites(prevMovie=>{
     if(prevMovie.some(fav=>fav.id===movie.id)){
      return prevMovie.filter(fav=>fav.id!==movie.id)
     }else{
      return [...prevMovie,movie]
     }
    })
    setShowFavorite(true)
   setTimeout(()=>setShowFavorite(false),1600)
   
  }
  async function FetchMovieSearch() {
    setLoading(true);
    
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query=${search}`);
      const data = await response.json();

      if (data.results) {
        setMovies(data.results);
        navigate('/')
      }
    } catch (e) {
      console.error("Error fetching searched movies:", e);
      setError(true);
    } finally {
      setLoading(false);
    }
  } 

  function Data(search){
    if(search!==''){
      FetchMovieSearch()
    }else{

      fetchMovie()
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    Data(search); // Call Data function to handle fetching based on search input
  };
  function removeFav(movie){
    setFavorites(prevMovies => prevMovies.filter(fav => fav.id !== movie.id));
  }

useEffect(()=>{Data(search)},[])
  console.log(movies);

  return (
    <ContextMovie.Provider value={{ search, setSearch ,handleSubmit,movies,setMovies,loading,error,Favorites,setFavorites,handleFavorites,removeFav,showFavorite}}>
      {children}
    </ContextMovie.Provider>
  );
}

export default GlobalState;
