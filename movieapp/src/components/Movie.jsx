
function Movie({key,coverImage,title,summary,genres}){
  
  return (
    <div key={key}>
            <h2>{title}</h2>
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