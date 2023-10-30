import "./HeroimgStyle.css";
import React from 'react'
import Introimg from "../assets/UniPic.png"
import { Link } from "react-router-dom";



const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={Introimg} alt="Introimg"/>
        </div>
        <div className="content">
            <p>Hi, I'M Abuzar Khan</p>
            <h1>Front-End Devoloper</h1>
            <div>
                <Link to="/Project" className="btn">Project</Link>
                <Link to="/Contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg