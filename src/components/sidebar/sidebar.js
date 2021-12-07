import React from "react"
import "./sidebar.scss"
import { FaFacebookF, FaInstagram, FaSkype } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr'
import { AiFillGithub } from 'react-icons/ai'
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi"

const Sidebar = () => {
    return (
        <div className="wrapDiv">
            <div><img src="https://avatars.githubusercontent.com/u/60787166?v=4" /></div>
            <div className="icons">
                {/* <a href="https://www.facebook.com/stefan.stefanovic.9279/" target="_blank"><FaFacebookF /></a> */}
                <a href="https://www.linkedin.com/in/stefan-stefanovic-000a38141/" target="_blank"> <GrLinkedinOption /></a>
                {/* <a href="https://www.instagram.com/stefanovic_stef/" target="_blank"> <FaInstagram /></a> */}
                <a href="https://join.skype.com/invite/J2t6hIfeAKqH" target="_blank"> <FaSkype /></a>
                <a href="https://github.com/StefanStefanovic94" target="_blank"> <AiFillGithub /></a>
                <a href="mailto:stefan.stef94@gmail.com" target="_blank"> <AiOutlineMail /></a>
                <a href="tel:+381640335692" target="_blank"> <FiPhoneCall /></a>

            </div>
            <div>
                <Link to="/"> <h3>Home</h3> </Link>
                <Link to="/about"><h3>About</h3></Link>
                <Link to="/projects"><h3>Projects</h3></Link>
            </div>
        </div >
    )
}

export default Sidebar