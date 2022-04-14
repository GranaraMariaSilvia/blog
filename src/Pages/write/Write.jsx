import React,{useState, useContext} from "react";
import "./write.css";
import {  Alert} from "react-bootstrap";
import {Context} from "../../context/Context";
import axios from "axios";

function Write() {

 
 

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const {user}= useContext(Context);
  const [categories, setCategories] = useState("");


const handleSubmit = async (e)=>{
  e.preventDefault();

 

  const newPost = {
    username:user.username,
    title,
    desc,
    categories
  }
  if(file){
   const data = new FormData();
   const filename= Date.now()+file.name;
   data.append("name", filename)
   data.append("file", file)
   newPost.photo = filename;
   try {
    await axios.post("/upload",data)
   } catch (error) {
     console.log(error);
   }
  }

  try {

   const res = await axios.post("/posts", newPost);

   window.location.replace("/post/"+ res.data._id)
    
  } catch (error) {
    console.log(error);
  }

}

//categoria funcion






  return (
    <div className="write">
      {file && (

      <img
        className="writeImg"
        src={URL.createObjectURL(file)}
        alt=""
      />
      )}

  
       <form className="writeForm"  onSubmit={handleSubmit}>
       
      


       
        <div className="writeFormGroup">

          <label htmlFor="fileInput">
            <i className=" writeIcon bi bi-plus-lg"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} onChange={e =>setFile(e.target.files[0])} />

          <input
            className="writeInput"
            autoFocus={true}
            type="text"
            name="titulo"
            placeholder="Titulo"
            onChange={e => setTitle(e.target.value)}
          />

<input
            className="writeInput"
            autoFocus={true}
            type="text"
            name="categoria"
            placeholder="Categoria"
            onChange={e => setCategories(e.target.value)}
          />


        </div>

        <div className="writeGroup">
          <textarea
            className="writeInput writeText"
            name="historia"
            placeholder="Cuente su historia..."
            type="text"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
      
        <button type="submit" className="writeSubmit">Publicar</button>
      </form>
    </div>
  );
}

export default Write;
