import { useState } from "react";
import { AnimeCard } from "./AnimeCard";

export function Anime(props) {
  
  return (
    <div className="main">
      {props.animeArray.map((resp)=>{
        return <AnimeCard image={resp.images.jpg.image_url} title={resp.title}/>
      })}
    </div>
  );
}