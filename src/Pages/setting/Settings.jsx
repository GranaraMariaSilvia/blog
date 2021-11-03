import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";

function Settings() {
  return (
    <div className=" container settings">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 ">
          <div className="settingsWrappers">
            <div className="settingsTitle">
              <span className="settingsUpdapeTitle"> Actualice su cuenta</span>
              <span className="settingsDeleteTitle"> Eliminar cuenta</span>
            </div>
            <form action="" className="settingsForm">
              <label> Foto de perfil</label>
              <div className="settingsPP">
                <img
                  src="https://www.rionegro.com.ar/wp-content/uploads/2020/11/lucia7.jpg?w=700"
                  alt=""
                />
                <label htmlFor="fileInput">
                  <i className=" settingsPPIcon bi bi-person-circle"></i>
                </label>
                <input type="file" id="fileInput" style={{ display: "none" }} />
              </div>
              <label> Username</label>
              <input type="text" placeholder="Juan" />
              <label> Email</label>
              <input type="email" placeholder="Juan@gmail.com" />
              <label> Password</label>
              <input type="password" />
              <button className="settingsSubmit"> Enviar</button>
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
