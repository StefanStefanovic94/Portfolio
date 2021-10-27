import React from "react";
import { Col } from "react-bootstrap";
import "./about.scss"

const About = () => {
    return (
        < Col xs="12" sm="10" md="9" lg="10">
            <div className="aboutDiv">
                <Col xs="12" sm="12" md="12" lg="12">
                    <p>
                        Highly motivated web developer with Bootcamp experience in JavaScript and React framework
                        with more than 400 hours of lessons,
                        and with 3 months internship in company. Still going forward and improving myself.
                    </p>
                </Col>
                <Col xs="12" sm="12" md="12" lg="12">
                    <div className="infoDiv">
                        <div>
                            <img src="https://avatars.githubusercontent.com/u/60787166?v=4" />
                        </div>
                        <div>
                            {/* <h5>Birthday: 15/12/1994</h5>
                            <h5>Email: stefan.stef94@gmail.com</h5>
                            <h5>Phone: +381640335692</h5> */}
                        </div>
                    </div>
                </Col>
            </div>
        </Col>
    )
}

export default About