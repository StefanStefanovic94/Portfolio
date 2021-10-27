import React from "react"
import "./sidebar.scss"
import { FaFacebookF, FaInstagram, FaSkype } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr'
import { AiFillGithub } from 'react-icons/ai'
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="wrapDiv">
            <div><img src="https://avatars.githubusercontent.com/u/60787166?v=4" /></div>
            <div><p> Stefan Stefanovic</p></div>
            <div className="icons">
                <a href="https://www.facebook.com/stefan.stefanovic.9279/"><FaFacebookF /></a>
                <a href="https://www.linkedin.com/in/stefan-stefanovic-000a38141/"> <GrLinkedinOption /></a>
                <a href="https://www.instagram.com/stefanovic_stef/"> <FaInstagram /></a>
                <a href="https://join.skype.com/invite/J2t6hIfeAKqH"> <FaSkype /></a>
                <a href="https://github.com/StefanStefanovic94"> <AiFillGithub /></a>
            </div>
            <div>
                <Link to="/"> <h3>Home</h3> </Link>
                <Link to="/about"><h3>About</h3></Link>
                <Link to="/projects"><h3>Projects</h3></Link>
                <Link to="/contact"><h3>Contact</h3></Link>
            </div>
        </div >
    )
}

export default Sidebar