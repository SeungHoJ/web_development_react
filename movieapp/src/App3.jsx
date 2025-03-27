import { useState, useEffect } from 'react'
import Movie from './components/Movie';
import './App.css'

function App() {
  const [ loading, setLoading ] = useState(true);
  const [ movies, setMovies] = useState([]);

  // useEffect(() => {
  //   fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year')
  //   .then(resp => resp.json())
  //   .then(json => {
  //     console.log(json.data.movies)
  //     setMovies(json.data.movies)
  //     setLoading(!loading)
  // })
  // },[])
  const getMovies = async() => {
    const resp = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year');
    const json = await resp.json();
    setMovies(json.data.movies);
    setLoading(!loading);
  }

  useEffect(() => {
    getMovies();
  },[])
  return (
    <div>
     {loading ? "Loading..." : 
      <div>
      {movies.map((movie) => 
        <Movie 
          key={movie.id}
          coverImage={movie.medium_cover_image}
          title={movie.title}
          summary={movie.summary}
          genres={movie.genres}
         />
      )}
      </div>
     }
     </div>
    
  )
}

export default App;
