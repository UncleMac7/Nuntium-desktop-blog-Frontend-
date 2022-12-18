import "./topbar.scss"

export default function Topbar() {
  return (
    <div className="Topbar">
     <div className="wrapper">
     <div className="Left">
        <div className="LogoContainer">
        <img src= './Assets/Logo.png'></img>
        </div>
        <a href="#Intro">Home</a>
        <a href="#Search">Tag</a>
        <a href="#About">About</a>
    </div>
    <div className="Right">
        <div className="SearchContainer">
        <a href="#Search"><img src="./Assets/search.svg"></img></a>
        </div>
        
        <a href="./components/Login" target={"_blank"}>
        <button className="login">Login
        </button>
        </a>
    </div>
        
        </div> 
    </div>
  )
}


