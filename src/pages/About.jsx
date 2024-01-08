import ImgCat from "../assets/profile_pic.png"
import GmailIcon from "../assets/icon_gmail.png"
import InstIcon from "../assets/icon_instagram.jpeg"
import LinkIcon from "../assets/icon_linked.png"
import GitIcon from "../assets/icon_github.png"
export function About() {

    return (
    <div className="about_main">

      <h1>About Me</h1>
      <h2>Welcome to my Anime Portal</h2>
      <div className="about_cont">
        <div>
          <img src={ImgCat} alt="" />
        </div>
        <div className="about_info">
          <h1>Tyler</h1>
          <h2>Frontend Developer</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque non
            neque debitis quibusdam ipsa reiciendis obcaecati, beatae blanditiis
            quisquam, dolores illum ut fugiat quam laudantium?
          </p>  
          <h2>Contact me</h2>
          <div className="icons_contact">
            <div className="icon_cont"><a href="https://github.com/DimashKnv"><img src={GitIcon} alt="" /></a></div>
            <div className="icon_cont"><img src={InstIcon} alt="" /></div>
            <div className="icon_cont"><img src={GmailIcon} alt="" /></div>
            <div className="icon_cont"><img src={LinkIcon} alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
