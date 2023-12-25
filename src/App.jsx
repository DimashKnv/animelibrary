import axios from "axios";
import "./App.css";
import { Anime } from "./components/Anime";
import { Navigation } from "./components/Navigation";
import { Search } from "./components/Search";
import { useEffect, useState } from "react";

function App() {
  const [array, setArray] = useState([]);

  
  // fetch('https://api.jikan.moe/v4/anime').then((resp)=>{
  //   return resp.json()
  // }).then((resp2)=>{
  //   array=resp2.data
  //   console.log(resp2.data)
  // })

  useEffect(() => {
    axios.get("https://api.jikan.moe/v4/anime").then((resp) => {
      setArray(resp.data.data);
    });
  }, []);
  

  return (
    <div>
      <Navigation></Navigation>
      <Search></Search>
      <Anime animeArray={array}></Anime>
    </div>
  );
}

export default App;
