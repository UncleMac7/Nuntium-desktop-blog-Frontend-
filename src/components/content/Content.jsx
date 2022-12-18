import React from 'react'
import './content.scss'

export default function Content() {

    const data = [
        {
            id:"1",
            img:"./Assets/imgA.png",
            tag : "Minimalist",
            title: "Culpa sit Laboris Exercitation ea Fugiat",
            author: "Panya Will&#8226; June 9, 2022 (5 mins read)",
            desc: "Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut i fugiat. Dolor velit excepteur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum at magnam saepe quo. Dignissimos laudantium mollitia aliquam voluptatem nihil voluptatum,labore dolore doloremque beatae fuga omnis eligendi et nostrum rem!",
            

        },
        {
            id:"2",
            img:"./Assets/imgB.png",
            tag : "Technology",
            title: "Culpa sit Laboris Exercitation ea Fugiat",
            author: "Panya Will&#8226; June 9, 2022 (5 mins read)",
            desc: "Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut i fugiat. Dolor velit excepteur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum at magnam saepe quo. Dignissimos laudantium mollitia aliquam voluptatem nihil voluptatum,labore dolore doloremque beatae fuga omnis eligendi et nostrum rem!",
            

        },
        {
            id:"3",
            img:"./Assets/imgC.png",
            tag : "Article",
            title: "Culpa sit Laboris Exercitation ea Fugiat",
            author: "Panya Will&#8226; June 9, 2022 (5 mins read)",
            desc: "Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut i fugiat. Dolor velit excepteur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum at magnam saepe quo. Dignissimos laudantium mollitia aliquam voluptatem nihil voluptatum,labore dolore doloremque beatae fuga omnis eligendi et nostrum rem!",
            

        }
    ]
    const data2 = [
        {
            id: "1",
            img:"./Assets/Nature.png",
            tag : "Nature",
            title: "Culpa sit Laboris Exercitation ea Fugiat",
            author: "Panya Will&#8226; June 9, 2022 (5 mins read)",
            desc: "Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut i fugiat. Dolor velit excepteur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum at magnam saepe quo. Dignissimos laudantium mollitia aliquam voluptatem nihil voluptatum,labore dolore doloremque beatae fuga omnis eligendi et nostrum rem!",
            

        },
        {
            id:"2",
            img:"./Assets/Plants.png",
            tag : "Plants",
            title: "Culpa sit Laboris Exercitation ea Fugiat",
            author: "Panya Will&#8226; June 9, 2022 (5 mins read)",
            desc: "Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut i fugiat. Dolor velit excepteur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum at magnam saepe quo. Dignissimos laudantium mollitia aliquam voluptatem nihil voluptatum,labore dolore doloremque beatae fuga omnis eligendi et nostrum rem!",
            
        },
        {
            id:"3",
            img:"./Assets/Food.png",
            tag : "Food",
            title: "Culpa sit Laboris Exercitation ea Fugiat",
            author: "Panya Will&#8226; June 9, 2022 (5 mins read)",
            desc: "Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut i fugiat. Dolor velit excepteur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum at magnam saepe quo. Dignissimos laudantium mollitia aliquam voluptatem nihil voluptatum,labore dolore doloremque beatae fuga omnis eligendi et nostrum rem!",
            
        },
        {
            id: "4",
            img:"./Assets/Color.png",
            tag : "Colorful",
            title: "Culpa sit Laboris Exercitation ea Fugiat",
            author: "Panya Will&#8226; June 9, 2022 (5 mins read)",
            desc: "Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut i fugiat. Dolor velit excepteur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum at magnam saepe quo. Dignissimos laudantium mollitia aliquam voluptatem nihil voluptatum,labore dolore doloremque beatae fuga omnis eligendi et nostrum rem!",
            

        },
    ]
  return (
    <div className='Editor' id='Tag'>

        <div className="Editor_picks">
        <h1 className='head'>Editor's Picks</h1>
        {
            data.map((d) => (
                <div className="itemContainer">
                <div className="Left">
               <a href=''><img src={d.img}></img></a> 
                </div>
                <div className="Right">
                    <h4>{d.tag}</h4>
                    <h1>{d.title}</h1>
                    <h5>{d.author}</h5>
                    <p>{d.desc}</p>
                </div>
            </div>

            ))
          
        }
        </div>

        <div className="featuredArticle">
            <a href='#Search'><img src='./Assets/featuredArticle.png'></img></a>
            <div className="article">
                <div className="content">
                    <h4>INTERIOR</h4>
                    <h1>Culpa sit Laboris Exercitation ea Fugiat</h1>
                    <h5> Panya Will&#8226; June 9, 2022 (5 mins read) </h5>
                    <p>Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut i fugiat. Dolor velit excepteur. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum at magnam saepe quo. 
                        Dignissimos laudantium mollitia aliquam voluptatem nihil voluptatum, 
                        labore dolore doloremque beatae fuga omnis eligendi et nostrum rem!

                    </p>
                </div>
                   
            </div>
        </div>
        <div className="recentPosts">
            
            <div className="posts">
            {
                data2.map((m) =>(<div className="itemContainers">
                <div className="Picture">
               <a href=''><img src={m.img}></img></a> 
                </div>
                <div className="Info">
                    <h4>{m.tag}</h4>
                    <h1>{m.title}</h1>
                    <h5>{m.author}</h5>
                    <p>{m.desc}</p>
                </div>   
            </div>
            ))
            }
                
            </div>
            <div className="tags">
                <h4>tags.</h4>
                <ul>
                    <li>Tech</li>
                    <li>Career</li>
                    <li>Music</li>
                    <li>Open Source</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Angular</li>
                    <li>Food</li>
                    <li>Racing</li>
                    <li>React</li>
                    <li>Web</li>
                    <li>Javascript</li>
                    <li>Life</li>
                    <li>Self Help</li>
                    <li>AWS</li>
                    <li>Git</li>
                </ul>
            </div>
        </div>
            
    </div>

  )
}
