import axios from "axios";
import "./App.css";
import { Anime } from "./components/Anime";
import { Navigation } from "./components/Navigation";
import { Search } from "./components/Search";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Contacts } from "./pages/Contact";

function App() {
  const [array, setArray] = useState([]);
  const [searchAnime, setSearchAnime] = useState("");

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

  function searchAxios() {
    axios
      .get(`https://api.jikan.moe/v4/anime?q=${searchAnime}`)
      .then((resp) => {
        setArray(resp.data.data);
      });
  }

  return (
    <div>
      <Navigation></Navigation>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Search
                searchAnime={searchAnime}
                setSearchAnime={setSearchAnime}
                searchAxios={searchAxios}
              ></Search>
              <Anime animeArray={array} />
            </>
          }
        ></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contacts" element={<Contacts />}></Route>
      </Routes>
    </div>
  );
}

export default App;
