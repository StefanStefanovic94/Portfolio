import React, { useState, useEffect } from 'react';
import { Col } from "react-bootstrap";
import "./home.scss"

const Home = () => {

   



  
    return (
        < Col xs="12" sm="12" md="12" lg="12">
            <div className="homeDiv">
                <Col className="center" xs="10" sm="10" md="7" lg="5">
                    <p className="parag">
                    Hello, my name is Stefan, I am passionate FrontEnd Developer who loves coding. I am interested in JavaScript and its ecosystem. Web Development is something that interests me the most, I am trying to improve myself in that area and every new knowledge impresses me very much. For now I use the most popular JS framework such as React, but I try to expand my knowledge to other technologies as well. I mostly did projects with React and for some projects I used Redux for state management. I get along very well with the Bootstrap grid system, Node Package Manager and Git version control system.
                    </p>
                </Col>
                {/* <p className="nameHome">Stefan Stefanovic</p> */}
                <img src="https://media.istockphoto.com/photos/workplace-desk-with-computer-at-window-in-office-at-home-in-apartment-picture-id1182529932?k=20&m=1182529932&s=612x612&w=0&h=2ALhIilE2bWZwZTjRlTRrlM9cdlGW4IDkYtpuu2jtuk=" />
            </div>
        </Col>
    )
}

export default Home

