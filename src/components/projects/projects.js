import React from "react";
import { Col } from "react-bootstrap";
import "./projects.scss"

const Projects = () => {
    return (
        <div className="allProjects">
            <Col xs="12" sm="10" md="8" lg="5" xl="3">
                <a href="https://stefanstefanovic94.github.io/series-deploy/#/" target="_blank" >
                    <div>
                        <h1>TV SHOWS</h1>
                        <p>TV SHOWS is an application that allows you to search for existing TV series,
                            take a closer look at the summary, information about the seasons,
                            episodes and actors.</p>
                    </div>
                </a>
            </Col>
            <Col xs="12" sm="10" md="8" lg="5" xl="3">
                <a href="https://stefanstefanovic94.github.io/budget-deploy/#/" target="_blank">
                    <div>
                        <h1>WALLET</h1>
                        <p>Application that was built by react framework,
                            allows you to log in, register and log out users,
                            and allows you to add income or expense.</p>
                    </div>
                </a>
            </Col>
            <Col xs="12" sm="10" md="8" lg="5" xl="3">
                <a href="https://stefanstefanovic94.github.io/deploy-task-board/#/" target="_blank">
                    <div>
                        <h1>TASK BOARD</h1>
                        <p>Application, that was built by atomic design with redux in react framework.
                            The inspiration for this project came from jira, app used to manage the project.</p>
                    </div>
                </a>
            </Col>
            <Col xs="12" sm="10" md="8" lg="5" xl="3">
                <a href="https://github.com/StefanStefanovic94/news" target="_blank">
                    <div>
                        <h1>NEWS</h1>
                        <p>On this app you can see all actual news around the world, you can search some special news that you want,
                            and also you can choose some categories.</p>
                    </div>
                </a>
            </Col>
            <Col xs="12" sm="10" md="8" lg="5" xl="3">
                <a href="https://stefanstefanovic94.github.io/deploy-todo/" target="_blank">
                    <div>
                        <h1>TO DO LIST</h1>
                        <p>Application, that was built by atomic design in react framework.
                            This application allows you to write things to do, remove, search and select.</p>
                    </div>
                </a>
            </Col>
            <Col xs="12" sm="10" md="8" lg="5" xl="3">
                <a href="https://github.com/StefanStefanovic94/Interview-Reports" target="_blank">
                    <div>
                        <h1>INTERVIEWS </h1>
                        <p>Application system for tracking candidates,
                            companies, job interviews and creating new interview reports.</p>
                    </div>
                </a>
            </Col>
        </div>
    )
}

export default Projects