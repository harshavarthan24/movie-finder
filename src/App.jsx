import React, { useEffect, useState } from "react";
import Search from "./components/search";
import MovieCard from "./components/movie-card";
import { useDebounce } from "react-use";
import { updateSearchCount } from "./appwrite";

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const API_OPTIONS = {
  method: 'GET' ,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  useDebounce(() => {
    setDebouncedSearchTerm(searchTerm);
  }
  , 500, [searchTerm]);

  const fetchMovies = async (query= '') => {
    setIsLoading(true);
    setErrorMessage('');
    try {
      const endpoint = query?
      `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
      :`${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if(!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      if(data.response === 'False') {
        setErrorMessage(data.Error || 'An error occurred while fetching data');
        setMovieList([]);
        return;
      }

      setMovieList(data.results || []);

      if(query && data.results.length > 0){
        console.log("Updating search count with:", query, data.results[0]);
        await updateSearchCount(query, data.results[0]);
      }
    }
    catch (error) {
      console.error(`Error: ${error}`);
      setErrorMessage('An error occurred while fetching data');
    }
    finally{
      setIsLoading(false);
    }
  }


  useEffect(() => {
    fetchMovies(debouncedSearchTerm)
  }, [debouncedSearchTerm]);
 

  return (
    <main>
      <div className="pattern"/>

      <div className="wrapper">
        <header>
          <img src="./hero.png"/>
          <h1 className="font-dm-sans">Find <span className="text-gradient">Movies</span> you will enjoy without the hassle</h1>
        
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </header>
        <section className="all-movies">
          <h2>All movies</h2>

          {isLoading? (
            <p>Loading...</p>
          ) : errorMessage? (
            <p>{errorMessage}</p>
          ): (
            <ul>
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  )
}

export default App
