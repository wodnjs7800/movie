import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function Nav(){
  return(
        <div className="navbar">
          <div className="logo">MovieChart</div>
           <ul className="nav-links">
              <Link to="/movie">Home</Link>
              <Link to="/rating">Rating</Link>
              <Link to="/downloadcount">DownloadCount</Link>
           </ul>
        </div>
  );

}
export default Nav;