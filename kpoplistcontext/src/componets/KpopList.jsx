import { useContext } from "react";
import { KpopContext } from "../context/Context";

function KpopList(){
  const {playlist} = useContext(KpopContext)
  return(
    <ul>
      {playlist.map((song,index) => (
        <li key={index}>
          <h3>{song.title}</h3>
          <strong>{song.artist}</strong>
          <span>({song.releaseDate})</span>
        </li>
      ))}
    </ul>
  )
}

export default KpopList