import React,{useContext, useState} from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Context from "../../context/Context";
import "./settings.css";
import axios from "axios";


function Settings() {
  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);

  const user = useContext(Context);

  const handleSubmit = async (e)=>{
    e.preventDefault();
  
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
  
     await axios.put("/users/"+ user._id, updateUser);
     
    } catch (error) {
      console.log(error);
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
                <img
                  src={user.profilePic}
                />
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
