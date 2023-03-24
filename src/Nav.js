import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function Nav(){
  return(
        <div className="navbar">
          <div className="logo">MovieChart</div>
           <ul className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/Rating">Rating</Link>
              <Link to="/DownloadCount">DownloadCount</Link>
           </ul>
        </div>
  );

}
export default Nav;