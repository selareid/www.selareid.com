import {Container} from "@mui/material";
import React from "react";
import "./AboutMe.css";

const AboutMe: React.FC = () => {
    return (
        <Container fixed>
            <h1>UwU 👉👈</h1>
            <p>
                I'm a student at the University of Auckland <br/>
                Majoring in Mathematics and Computer Science <br/>
                Curious about the world and how/why things work <br/>
                Current Interests: Rust, Maths, React <br/>
                Languages I've Used: Rust, JS/TX, HTML/CSS, Python, Java
            </p>
        </Container>
    )
};

export default AboutMe;