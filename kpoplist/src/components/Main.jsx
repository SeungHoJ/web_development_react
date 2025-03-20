import Button from "./Button"
import KpopList from "./KpopList";
import React from "react";

function Main({data,playlist,setPlaylist}){
  return(
    <>
      <Button data={data} setPlaylist={setPlaylist}>
        레드벨벳 노래 찾기
      </Button>
      <Button data={data} setPlaylist={setPlaylist}>
        남자 아티스트 노래 찾기
      </Button>
      <Button data={data} setPlaylist={setPlaylist}>
        여자 아티스트 노래 찾기
      </Button>
      <KpopList playlist={playlist} />
    </>
  )
}

export default Main;