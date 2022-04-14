import React from "react";
import Posteo from "../posteos/Posteo";
import "./posts.css";
import { Col, Row } from "react-bootstrap";

function Posts({posts}) {



  return (
    <div className="containerPost">
      {
        posts.map((p) =>(
          <Posteo post={p} />
        ))
      }
    </div>
    )
}

export default Posts;
