import React from "react"
import "./sidebar.scss"
import { FaFacebookF } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className="wrapDiv">
            <div><img src="https://avatars.githubusercontent.com/u/60787166?v=4" /></div>
            <div><p> Stefan Stefanovic</p></div>
            <div className="icons"><FaFacebookF  /></div>
        </div>
    )
}

export default Sidebar