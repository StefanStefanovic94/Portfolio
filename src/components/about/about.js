import React from "react";
import { Col } from "react-bootstrap";
import "./about.scss"

const About = () => {
    return (
        < Col xs="12" sm="10" md="9" lg="10">
            <div className="aboutDiv">
                <Col className="center" xs="12" sm="8" md="4" lg="3">
                    <p>
                        Highly motivated web developer with Bootcamp experience in JavaScript and React framework
                        with more than 400 hours of lessons,
                        and with 3 months internship in company. Still going forward and improving myself.
                    </p>
                </Col>
                <Col xs="12" sm="12" md="12" lg="12">
                    <div className="infoDiv">
                        <Col xs="12" sm="8" md="6" lg="4">
                            <div>
                                <h1>Educations</h1>
                                <div>
                                    BIT - Belgrade Institute of Technology<br />
                                    Belgrade | Started at February 2020 <br />
                                    Attended a 10 weeks long bootcamp for Front End Web
                                    Development, focusing on JavaScript<br />
                                    400+ hours of lessons/ 9 hours per day <br />
                                    Simulation of how does real life programming company
                                    work
                                </div>
                                <div>
                                    Faculty of Sciences | Chair of Tourism <br />
                                    Novi Sad | Oct 2017 - Oct 2018 <br />
                                </div>
                                <div>
                                    The College of Economy and Tourism<br />
                                    Belgrade | Oct 2013 - Oct 2017 <br />
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" sm="8" md="6" lg="4">
                            <div>
                                <h1>Work Experience</h1>
                                <div>
                                    Front-end web development | Internship <br />
                                    Belgrade | Nov 2020-Jan 2021 <br />
                                    3 months on Internship in small company Kortechs,
                                    working on real project. We did not continue to cooperate
                                    because they stopped internship project during the
                                    pandemic and started to work remote
                                </div>
                                <div>
                                    Data Archiving Agency <br />
                                    Belgrade |Oct 2018-Nov 2019 <br />
                                    Storing data in software
                                </div>
                                <div>
                                    Tourism Organisation- Novi Sad | Internship <br />
                                    Novi Sad | Feb 2018 - Mart 2018 <br />
                                    Representing city and giving instruction to the visitors
                                </div>
                                <div>
                                    Work And Travel Student Program | Internship
                                    SAD,Alaska | May 2016-Sep 2016
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" sm="8" md="" lg="4">
                            <div>
                                Skills
                                sssssssssssssssssssssssssssssssssssssssssssssssssssss ssssssssssssssssssssssssss
                            </div>
                        </Col>

                    </div>
                </Col>
            </div>
        </Col>
    )
}

export default About