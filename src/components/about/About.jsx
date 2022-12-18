import React from 'react'
import "./about.scss";

export default function () {
  return (
    <div className='main' id='About'>
        <div className="itemContainer">
            <img src='./Assets/Logo.png'/>
            <h5>A publishing company that focuses on the essentials.</h5>
        </div>
        <div className="info">
            <div className="rectangle1"></div>
            <div className="rectangle2"></div>

            <div className="infoIntro">
                <div className="intro">
                    <h1>We tell stories that drives the heart.</h1>
                    <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere saepe itaque tempora,
                      temporibus officia enim eum exercitationem voluptates? 
                     Vel perspiciats quaerat neque temporibus! Eveniet sint ad molestias omnis ullam repellendus!
                    </p>
                </div>
                <div className="imgContainer">
                    <img src ='./Assets/APicture.png'/>
                </div>
            </div>
            <div className="infoContent">
                <div className="imgContainer">
                    <img src ='./Assets/BPicture.png'/>
                </div>
                <div className="intro">
                    <h1>We tell the news that makes the most impact.</h1>
                    <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere saepe itaque tempora,
                      temporibus officia enim eum exercitationem voluptates? 
                     Vel perspiciatis quaerat neque temporibus! Eveniet sint ad molestias omnis ullam repellendus!
                    </p>
                </div>

            </div>
            <div className="endContent">
                <h1>We share the little moments that shows we’re alive.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur autem repellat tenetur rem minus? 
                   Cum, exercitationem laboriosam. Quibusdam aliquam dolor,
                   temporibus minima repellat labore. Laudantium reprehenderit tempore unde provident animi?
                   </p>
            </div>
            <div className="images">
                <img src='./Assets/Cat.png'></img>
                <img src='./Assets/Baby.png'></img>
                <img src='./Assets/Man.png'></img>
            </div>
        </div>
    </div>
  )
}
