import React from "react";
import {Button, Container} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import "./AboutMe.css";

const AboutMe: React.FC = () => {
    return (
        <Container fixed className="contentContainer">
            <h1 style={{marginBottom: "0px"}}>Daniel Reid</h1>
            <h5 style={{marginTop: "0px"}}>Curious about the world and how things work</h5>

            <p>
                I'm a student at the University of Auckland. <br/>
                Majoring in Mathematics and Computer Science.
            </p>
            <p>
                Current Interests: Rust, Maths, React
            </p>
            <p style={{marginTop: "-20px"}}>
                Languages I've Used: Rust, JS/TX, HTML/CSS, Python, Java
            </p>

            <Button variant="text" color="secondary"
                    startIcon={<GitHubIcon/>} href="https://github.com/selareid/">GitHub</Button>
        </Container>
    )
};

export default AboutMe;