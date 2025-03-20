import React from "react";

function Button({data,setPlaylist,filterType,children}){
  const handleClick = () => {
    let result = [...data];
  

  if(filterType ==='레드벨벳 노래 찾기'){
    result = data.filter((song) => song.artist === 'Red Velvet');
  }

  if(filterType ==='남자 아티스트 노래 찾기'){
    result = data.filter((song) => song.gender === 'male');
  }

  if(filterType ==='여자 아티스트 노래 찾기'){
    result = data.filter((song) => song.gender === 'female');
  }

  setPlaylist(result);
};

  return <button onClick={handleClick}>{children}</button>;
}

export default Button;