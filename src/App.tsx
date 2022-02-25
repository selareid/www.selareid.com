import React from 'react';
import './App.css';
import {Button, ButtonGroup, Container} from "@mui/material";

function App() {
    return (
        <div className="App" background-color="red">
            <header className="App-header">
                {/*<p>UwU</p>*/}
                <ButtonGroup variant="text" color="secondary" >
                    <Button>home/about-me</Button>
                </ButtonGroup>
            </header>

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
        </div>
    );
}

export default App;
