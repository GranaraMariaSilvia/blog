import React from "react";
import "./single.css";
import Sidebar from "../sidebar/Sidebar";
import SinglePost from "../singlePost/SinglePost";

function Single() {
  return (
    <div className="single">
      {/**Post */}
      <SinglePost />
      <Sidebar />
    </div>
  );
}

export default Single;
