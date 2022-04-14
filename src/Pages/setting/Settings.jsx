import React,{useContext, useState} from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Context from "../../context/Context";
import "./settings.css";
import axios from "axios";


function Settings() {

  const {user,dispatch} = useContext(Context);
  const PF = "http://localhost:5000/images/"
  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);

  

  const handleSubmit = async (e)=>{
    e.preventDefault();

    dispatch({type:"UPDATE_START"})
  
    const updateUser = {
      userId: user._id,
      username,
      email,
      password
    }
    if(file){
     const data = new FormData();
     const filename= Date.now() +file.name;
     data.append("name", filename)
     data.append("file", file)
     updateUser.profilePic = filename;
     try {
      await axios.post("/upload",data)
     
     } catch (error) {
       console.log(error);
     }
    }
  
    try {
  
    const res = await axios.put("/users/"+ user._id, updateUser);
     setSuccess(true);
     dispatch({type:"UPDATE_SUCCESS", payload: res.data});
    } catch (error) {
      dispatch({type:"UPDATE_FAILURE"})
    }
  
  }

  return (
    <div className=" container settings">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 ">
          <div className="settingsWrappers">
            <div className="settingsTitle">
              <span className="settingsUpdapeTitle"> Actualice su cuenta</span>
              <span className="settingsDeleteTitle"> Eliminar cuenta</span>
            </div>
            <form className="settingsForm" onSubmit={handleSubmit}>
              <label> Foto de perfil</label>
              <div className="settingsPP">

              <img src={file ? URL.createObjectURL(file):PF+user.profilePic}
               alt="" />
                <label htmlFor="fileInput">
                  <i className=" settingsPPIcon bi bi-person-circle"></i>
                </label>
                <input
                 type="file"
                  id="fileInput"
                   style={{ display: "none" }}
                onChange={e =>setFile(e.target.files[0])} />
              </div>
              <label> Username</label>
              <input type="text" placeholder={user.username} onChange={e=>setUsername(e.target.value)} />
              <label> Email</label>
              <input type="email" placeholder={user.email}  onChange={e=>setEmail(e.target.value)}/>
              <label> Password</label>
              <input type="password"  onChange={e=>setPassword(e.target.value)} />
              <button className="settingsSubmit" type="submit"> Enviar</button>
            </form>
            {success && <span style={{color:"green", textAlign:"center", marginTop:"50px"}}>Perfil actualizado...</span>}
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Settings;
