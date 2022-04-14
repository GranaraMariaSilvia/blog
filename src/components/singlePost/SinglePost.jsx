import React,{useState, useEffect, useContext} from "react";
import "./singlePost.css";
import { Card } from "react-bootstrap";
import { useLocation } from "react-router";
import axios from "axios";
import Context from "../../context/Context";
import {Link} from "react-router-dom";

function SinglePost() {

const location = useLocation();



const path = location.pathname.split("/")[2];


const[post, setPost] = useState({});
const PF = "http://localhost:5000/images/";
const {user}= useContext(Context);
const [title, setTitle] = useState("");
const [desc, setDesc] = useState("");
const [categoria, setCategoria] = useState("");
const [updateMode, setUpdateMode] = useState(false);


useEffect(() => {

  const getPost =async ()=>{
    const res = await axios.get("/posts/"+ path)
    setPost(res.data)
    setTitle(res.data.title)
    setDesc(res.data.desc)
    setCategoria(res.data.categoria)
  }
 getPost()
}, [path])



const handleDelete= async()=>{

  try {
    await axios.delete( `/posts/${post._id}`,{
      data:{ username: user.username} 
     });
    window.location.replace("/")  //paraq me lleve a la pagina de inicio
    
  } catch (error) {
    console.log(error);
  }
 
}


const handleUpdate = async()=>{
  try {
    await axios.put( `/posts/${post._id}`,{
      username: user.username,
      title:title,
       desc:desc,
       categoria: categoria

      
     });
  //  window.location.reload()  //paraq me lleve a la pagina de inicio
    setUpdateMode(false)
  } catch (error) {
    console.log(error);
  }
}

  return (
    <div className="singlePost">
      <Card className="singlePostWrapper">

        {post.photo && (
          <Card.Img
          className="singlePostImage"
          variant="top"
          src={PF+post.photo}
        />
        )}
        {
          updateMode? <input type="text" 
           value={title} 
           className="singlePostTitleInput"
           onChange={(e)=>setTitle(e.target.value)}
           autoFocus
           /> 
           
           : (

          <Card.Title className="singlePostTitle">
           {title}

           {post.username === user?.username && (

            <div className="singlePostEdit">
              <i className=" singlePostIcon bi bi-pencil-square" onClick={()=>setUpdateMode(true)}></i>
              <i className=" singlePostIcon bi bi-trash" onClick={handleDelete}></i>
            </div>
           )}
          </Card.Title>
          )
        }
      

          <Card.Text className="singlePostInfo">
            <span className="singlePostAutor">
              Autor:
            <Link to={`/?user=${post.username}`} className="link">
              <b>{ post.username}</b>
              </Link>
            </span>
            <spa className="singlePostDate">{new Date(post.createdAt).toLocaleDateString()}</spa>
          </Card.Text>
          <Card.Text>
          <span className="singlePostAutor">
              Categoria:
            <Link to={`/?user=${post.categoria}`} className="link">
              <b>{ categoria}</b>
              </Link>
            </span>
          

          </Card.Text>



          {updateMode? (<textarea className="singlePostDescInput" value={desc} onChange={(e)=>setDesc(e.target.value)} />) :
           (
           <p className="singlePostDesc" >{desc} </p> 
                 ) }

                 {updateMode && (

                   <button className="singlePostButton" onClick={handleUpdate}> actualizar</button>
                 )
                   }
        
         
      </Card>
    </div>
  );
}

export default SinglePost;
