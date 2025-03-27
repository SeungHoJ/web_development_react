import { Link } from "react-router-dom";

function Movie({id,coverImage,title,summary,genres}){
  
  return (
    <div>
            <h2>
              <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <img src={coverImage} alt={title} />
            <p>{summary}</p>
            <ul>  
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