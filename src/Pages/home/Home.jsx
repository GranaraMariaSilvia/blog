import React,{useState,useEffect} from "react";
import "./home.css";
import Headers from "../../components/headers/Headers";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/Posts";
import { Col, Row, Table } from "react-bootstrap";
import axios from "axios";
import { useLocation } from "react-router";

function Home() {

const [posts,setPosts] =useState([]);

const {search} = useLocation();
console.log(search)

useEffect(() => {
 
const fetchPost = async () =>{
 const res = await axios.get("/posts"+search)

 setPosts(res.data)
 console.log(res);
}
 fetchPost();
}, [search])

  return (
    <div>
      <Headers />
       
      <Row >
        
        <Col sm={9} >
          <Posts posts={posts} />
        </Col>
      
        <Col sm={3}>
          <Sidebar />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
