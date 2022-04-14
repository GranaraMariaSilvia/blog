import React from "react";
import "./posteo.css";
import { Card } from "react-bootstrap";
import {Link} from "react-router-dom";






function Posteo({post}) {

 

  
  const PF = "http://localhost:5000/images/"
  return (
    <div>
     

       <Link  to={`/post/${post._id}`} className="linkBoton">
          <Card.Title className="titlePost"> {post.title}</Card.Title> 
          
           </Link>



      <Card className="containerCard">
        {
          post.photo && (

            <Card.Img
            className="imgPost"
              variant="top"
              src={PF + post.photo}
            />
          )
        }
        <Card.Body>
          <div>
          {post.categories.map(cat =>(
             <Card.Title className="titlePost"> {cat.name}</Card.Title>
          ))}  
          
          </div>
         
        
        
          <span className="postDate">{new Date(post.createdAt).toLocaleDateString() } </span>
          <Card.Text className="textCard">
           {post.desc}
          </Card.Text>
         
         
        </Card.Body>
      </Card>
      

      
    </div>
  );
}

export default Posteo;
