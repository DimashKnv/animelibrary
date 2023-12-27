import { Link } from "react-router-dom";

export function Navigation(){
    return <nav>
    <img
      src="https://www.pngmart.com/files/Anime-Logo-PNG-Transparent.png"
      alt=""
    />
    <ul>
      <li>
        <button><Link to='/'>Home</Link></button>
      </li>
      <li>
        
        <button><Link to='/About'>About</Link></button>
      </li>
      <li>
        
        <button><Link to='/Contacts'>Contacts</Link></button>
      </li>
    </ul>
  </nav>
}