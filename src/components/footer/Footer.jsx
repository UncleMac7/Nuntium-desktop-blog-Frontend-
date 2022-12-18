import React from 'react'
import "./footer.scss";

export default function Footer() {
  return (
    <div className='main'>
        <div className="Container">
            <div className="item">
            <h1>Because we are you.</h1>
            <h2>Humans.</h2>
                    <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere saepe itaque tempora,
                      
                    </p>
            </div>
        </div>
        <div className="Container2">
            <div className="item2">
                  <h1>Want to Connect ?</h1>
                    <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere saepe itaque tempora,
                      temporibus officia enim eum exercitationem voluptates? 
                     Vel perspiciatis quaerat neque temporibus! Eveniet sint ad molestias omnis ullam repellendus!
                    </p>
                    <div className="social">
                       <a href='https://twitter.com/?lang=en' target={"_blank"}><img src="./Assets/twitter.png"></img></a> 
                        <a href='https://www.instagram.com/' target={"_blank"}><img src="./Assets/Ig.png"></img></a>
                        <a href='https://www.linkedin.com/login' target={"_blank"}><img src="./Assets/Link.png"></img></a>
                    </div>
            </div>
        </div>
    </div>
  )
}
