import React from "react";
import "./single.css";
import Sidebar from "../sidebar/Sidebar";
import SinglePost from "../singlePost/SinglePost";

function Single() {
  return (
    <div className="single">
      {/**Post */}
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-9 ">
     
        <SinglePost />

        </div>

      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Single;
