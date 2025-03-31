import { Link } from "react-router-dom";

function Movie({id,coverImage,title,summary,genres}){
  
  return (
    <div className="movie-card">
      <Link to={`/movie/${id}`}>
        <img src={coverImage} alt={title} />
      </Link>
      <div className="movie-card-title">
        <Link to={`/movie/${id}`}>{title}</Link>
      </div>
      <ul className="movie-card-genres">  
        {genres.map((genre,index) => 
          <li key={index}>
            {genre}
          </li>
        )}
      </ul>
          
    </div>
    ) 
    
  
}

export default Movie;