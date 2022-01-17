import React from "react";
import "./posteo.css";
import { Card } from "react-bootstrap";
import {Link} from "react-router-dom";


function Posteo({post}) {

  
  const PF = "http://localhost:5000/images/"
  return (
    <div>
      
      <Card className="containerCard">
        {
          post.photo && (

            <Card.Img
              variant="top"
              src={PF + post.photo}
            />
          )
        }
        <Card.Body>
          <div>
          {post.categories.map(cat =>(
            <span>{cat.name} </span>
          ))}  
          
          </div>

          <Link  to={`/post/${post._id}`} className="linkBoton">
          <Card.Title> {post.title}</Card.Title>
          
           </Link>
          <hr/>
          <span className="postDate">{new Date(post.createdAt).toLocaleDateString() } </span>
          <Card.Text>
           {post.desc}
          </Card.Text>
        
         
        </Card.Body>
      </Card>
      

      
    </div>
  );
}

export default Posteo;
