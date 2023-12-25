export function AnimeCard(props){
    return  <div className="main_cont">
    <img src={props.image} alt="" />
    <h1>{props.title}</h1>
    <button>Watch</button>
    <h2>Learn more</h2>
  </div>
}