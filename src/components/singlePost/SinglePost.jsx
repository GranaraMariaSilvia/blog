import React,{useState, useEffect} from "react";
import "./singlePost.css";
import { Card } from "react-bootstrap";
import { useLocation } from "react-router";
import axios from "axios";

function SinglePost() {

const location = useLocation();



const path = location.pathname.split("/")[2];


const[post, setPost] = useState({});


useEffect(() => {

  const getPost =async ()=>{
    const res = await axios.get("/posts/"+ path)
    setPost(res.data)
  }
 getPost()
}, [path])


  return (
    <div className="singlePost">
      <Card className="singlePostWrapper">

        {post.photo && (
          <Card.Img
          className="singlePostImage"
          variant="top"
          src={post.photo}
        />
        )}
        <Card.Body>
          <Card.Title className="singlePostTitle">
           {post.title}
            <div className="singlePostEdit">
              <i className=" singlePostIcon bi bi-pencil-square"></i>
              <i className=" singlePostIcon bi bi-trash"></i>
            </div>
          </Card.Title>

          <Card.Text className="singlePostInfo">
            <span className="singlePostAutor">
              Autor: <b>{ post.username}</b>
            </span>
            <spa className="singlePostDate">{new Date(post.createdAt).toLocaleDateString()}</spa>
          </Card.Text>
          <p className="singlePostDesc">
            {post.desc}

          </p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SinglePost;
