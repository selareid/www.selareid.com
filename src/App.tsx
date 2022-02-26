import React from 'react';
import './App.css';
import {Button, ButtonGroup} from "@mui/material";
import './pages/AboutMe';
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import {BrowserRouter, Link, Routes, Route, Navigate} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <ButtonGroup variant="text" color="secondary" >
                        <Button className="navButton" component={Link} to={"/"}>home / about me</Button>
                        <Button className="navButton" component={Link} to={"/projects"}>Projects</Button>
                    </ButtonGroup>
                </header>

                <Routes>
                    <Route index element={<AboutMe/>}/>
                    <Route path="projects" element={<Projects/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
