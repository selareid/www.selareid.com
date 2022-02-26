import React from "react";
import {Button, Container} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import "./AboutMe.css";

const AboutMe: React.FC = () => {
    return (
        <Container fixed className="contentContainer">
            <h1>UwU 👉👈</h1>
            <p>Curious about the world and how things work</p>
            <p>
                I'm a student at the University of Auckland<br/>
                Majoring in Mathematics and Computer Science
            </p>
            <p>
                Current Interests: Rust, Maths, React <br/>
                Languages I've Used: Rust, JS/TX, HTML/CSS, Python, Java
            </p>

            <Button variant="text" color="secondary"
                    startIcon={<GitHubIcon/>} href="https://github.com/selareid/">GitHub</Button>
        </Container>
    )
};

export default AboutMe;